import {
  Address,
  Bytes,
  Balance,
  Context,
  PersistentMap,
  util,
  Host,
} from "idena-sdk-as";
import { JSON } from "idena-assemblyscript-json";

const ZERO_ADDRESS: Address = Address.fromBytes(new Uint8Array(20));
const ZERO_TOKEN: u64 = 0;

export class IRC721 {
  _name: string;
  _symbol: string;
  _totalSupply: u64;
  owners: PersistentMap<u64, Address>;
  balances: PersistentMap<Address, u64>;
  tokenApprovals: PersistentMap<u64, Address>;
  operatorApprovals: PersistentMap<string, bool>;

  _tokenURIs: PersistentMap<u64, string>;
  _lastTokenId: u64;
  _ownedBy: PersistentMap<string, u64>;
  _ownedTokensIndex: PersistentMap<u64, u64>;
  _owner: Address;

  constructor(name: string, symbol: string) {
    this._name = name;
    this._symbol = symbol;
    this._totalSupply = 0;
    this.owners = PersistentMap.withStringPrefix<u64, Address>("ow:");
    this.balances = PersistentMap.withStringPrefix<Address, u64>("ba:");
    this.tokenApprovals = PersistentMap.withStringPrefix<u64, Address>("ap:");
    this.operatorApprovals = PersistentMap.withStringPrefix<string, bool>("op:");
    this._tokenURIs = PersistentMap.withStringPrefix<u64, string>("ur:");

    this._lastTokenId = 0;
    this._ownedBy = PersistentMap.withStringPrefix<string, u64>("ob:");
    this._ownedTokensIndex = PersistentMap.withStringPrefix<u64, u64>("oi:");
    this._owner = Context.caller();
  }

  @view
  balanceOf(owner: Address): Balance {
    util.assert(owner != ZERO_ADDRESS, "Address zero is not a valid owner");
    return Balance.from(this.balances.get(owner, 0));
  }

  @view
  totalSupply(): u64 {
    return this._totalSupply;
  }

  @view
  ownerOf(tokenId: u64): Address {
    const owner = this.owners.get(tokenId, ZERO_ADDRESS);
    util.assert(owner != ZERO_ADDRESS, "Invalid token ID");
    return owner;
  }

  @view
  name(): string {
    return this._name;
  }

  @view
  symbol(): string {
    return this._symbol;
  }

  @view
  tokenURI(tokenId: u64): string {
    this._requireMinted(tokenId);
    return this._tokenURIs.get(tokenId, "");
  }

  approve(to: Address, tokenId: u64): void {
    const sender = Context.caller();
    const owner = this.ownerOf(tokenId);
    util.assert(to != owner, "Approval to current owner");
    util.assert(
      sender == owner || this.isApprovedForAll(owner, sender),
      "Approve caller is not token owner or approved for all"
    );
    this.tokenApprovals.set(tokenId, to);
    Host.emitEvent("Approval", [owner, to, Bytes.fromU64(tokenId)]);
  }

  @view
  getApproved(tokenId: u64): Address {
    this._requireMinted(tokenId);
    return this.tokenApprovals.get(tokenId, ZERO_ADDRESS);
  }

  setApprovalForAll(operator: Address, approved: bool): void {
    const owner = Context.caller();
    util.assert(owner != operator, "Approve to caller");
    const key = owner.toHex() + ":" + operator.toHex();
    if (approved) {
      this.operatorApprovals.set(key, approved);
    } else {
      this.operatorApprovals.delete(key);
    }
    Host.emitEvent("ApprovalForAll", [
      owner,
      operator,
      Bytes.fromU8(approved === true ? 1 : 0),
    ]);
  }

  @view
  isApprovedForAll(owner: Address, operator: Address): bool {
    const key = owner.toHex() + ":" + operator.toHex();
    return this.operatorApprovals.get(key, false);
  }

  transferFrom(from: Address, to: Address, tokenId: u64): void {
    const caller = Context.caller();
    util.assert(
      this._isApprovedOrOwner(caller, tokenId),
      "Caller is not token owner or approved"
    );
    util.assert(to != ZERO_ADDRESS, "Transfer to the zero address");

    this._removeTokenFromOwnerEnumeration(from, tokenId);
    this.tokenApprovals.delete(tokenId);
    this.balances.set(from, this.balances.get(from, 0) - 1);

    this._addTokenToOwnerEnumeration(to, tokenId);
    this.balances.set(to, this.balances.get(to, 0) + 1);

    this.owners.set(tokenId, to);
    Host.emitEvent("Transfer", [from, to, Bytes.fromU64(tokenId)]);
  }

  @mutateState
  mintWithTokenURI(to: Address, tokenId: u64, tokenURI: string): void {
    util.assert(to != ZERO_ADDRESS, "Mint to the zero address");
    util.assert(!this._exists(tokenId), "Token already minted");

    this._addTokenToOwnerEnumeration(to, tokenId);
    this.balances.set(to, this.balances.get(to, 0) + 1);
    this.owners.set(tokenId, to);
    this._tokenURIs.set(tokenId, tokenURI);
    this._totalSupply += 1;
    Host.emitEvent("Transfer", [ZERO_ADDRESS, to, Bytes.fromU64(tokenId)]);
  }

  @privateMethod
  _addTokenToOwnerEnumeration(owner: Address, tokenId: u64): void {
    const index = this.balances.get(owner, 0);
    const key = owner.toHex() + ":" + index.toString();
    this._ownedBy.set(key, tokenId);
    this._ownedTokensIndex.set(tokenId, index);
  }

  @mutateState
  burn(tokenId: u64): void {
    const caller = Context.caller();
    const owner = this.ownerOf(tokenId);
    util.assert(
      this._isApprovedOrOwner(caller, tokenId),
      "Caller is not token owner or approved"
    );

    this._removeTokenFromOwnerEnumeration(owner, tokenId);
    this.balances.set(owner, this.balances.get(owner, 0) - 1);
    this.owners.set(tokenId, ZERO_ADDRESS);
    this.tokenApprovals.delete(tokenId);
    this._tokenURIs.delete(tokenId);
    this._totalSupply -= 1;
    Host.emitEvent("Transfer", [owner, ZERO_ADDRESS, Bytes.fromU64(tokenId)]);
  }

  @privateMethod
  _removeTokenFromOwnerEnumeration(owner: Address, tokenId: u64): void {
    const lastTokenIndex = this.balances.get(owner, 0) - 1;
    const lastTokenKey = owner.toHex() + ":" + lastTokenIndex.toString();
    const deleteIndex = this._ownedTokensIndex.get(tokenId, 0);

    if (deleteIndex != lastTokenIndex) {
      const lastTokenId = this._ownedBy.get(lastTokenKey, ZERO_TOKEN);
      const deleteKey = owner.toHex() + ":" + deleteIndex.toString();
      this._ownedBy.set(deleteKey, lastTokenId);
      this._ownedTokensIndex.set(lastTokenId, deleteIndex);
    }

    this._ownedBy.delete(lastTokenKey);
    this._ownedTokensIndex.delete(tokenId);
  }

  @view
  _exists(tokenId: u64): bool {
    return this.owners.get(tokenId, ZERO_ADDRESS) != ZERO_ADDRESS;
  }

  @view
  _isApprovedOrOwner(spender: Address, tokenId: u64): bool {
    const owner = this.ownerOf(tokenId);
    return (
      spender == owner ||
      this.isApprovedForAll(owner, spender) ||
      this.getApproved(tokenId) == spender
    );
  }

  @view
  _requireMinted(tokenId: u64): void {
    util.assert(this._exists(tokenId), "Invalid token ID");
  }

  @mutateState
  transferOwnership(newOwner: Address): void {
    util.assert(Context.caller() == this._owner, "Only owner can transfer ownership");
    this._owner = newOwner;
  }
}

