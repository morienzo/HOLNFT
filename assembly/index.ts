import {
  Address,
  Bytes,
  Context,
  PersistentMap,
  util,
  Host,
  Balance
} from "idena-sdk-as";

const ZERO_ADDRESS: Address = Address.fromBytes(new Uint8Array(20));

export class IRC721 {
  _name: string;
  _symbol: string;
  _totalSupply: u64;
  owners: PersistentMap<u64, Address>;
  ownerTokens: PersistentMap<string, u64>;
  balances: PersistentMap<Address, u64>;
  tokenApprovals: PersistentMap<u64, Address>;
  operatorApprovals: PersistentMap<string, bool>;
  tokenURIs: PersistentMap<u64, string>;
  _owner: Address;

  constructor(name: string, symbol: string) {
    this._name = name;
    this._symbol = symbol;
    this._totalSupply = 0;
    this.owners = PersistentMap.withStringPrefix<u64, Address>("ow:");
    this.ownerTokens = PersistentMap.withStringPrefix<string, u64>("ot:");
    this.balances = PersistentMap.withStringPrefix<Address, u64>("ba:");
    this.tokenApprovals = PersistentMap.withStringPrefix<u64, Address>("ap:");
    this.operatorApprovals = PersistentMap.withStringPrefix<string, bool>("op:");
    this.tokenURIs = PersistentMap.withStringPrefix<u64, string>("uri:");
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
    return this.tokenURIs.get(tokenId, "");
  }

  approve(to: Address, tokenId: u64): void {
    const sender = Context.caller();
    const owner = this.ownerOf(tokenId);
    util.assert(to != owner, "Approval to current owner");
    util.assert(sender == owner || this.isApprovedForAll(owner, sender), "Approve caller is not token owner or approved for all");
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
    Host.emitEvent("ApprovalForAll", [owner, operator, Bytes.fromU8(approved ? 1 : 0)]);
  }

  @view
  isApprovedForAll(owner: Address, operator: Address): bool {
    const key = owner.toHex() + ":" + operator.toHex();
    return this.operatorApprovals.get(key, false);
  }

  transferFrom(from: Address, to: Address, tokenId: u64): void {
    const caller = Context.caller();
    util.assert(this._isApprovedOrOwner(caller, tokenId), "Caller is not token owner or approved");
    util.assert(to != ZERO_ADDRESS, "Transfer to the zero address");

    this.tokenApprovals.delete(tokenId);
    this.owners.set(tokenId, to);
    
    this._removeTokenFromOwnerEnumeration(from, tokenId);
    this.balances.set(from, this.balances.get(from, 0) - 1);
    
    this._addTokenToOwnerEnumeration(to, tokenId);
    this.balances.set(to, this.balances.get(to, 0) + 1);

    Host.emitEvent("Transfer", [from, to, Bytes.fromU64(tokenId)]);
  }

  @mutateState
  mint(to: Address, tokenId: u64, uri: string): void {
    util.assert(Context.caller() == this._owner, "Only owner can mint");
    util.assert(to != ZERO_ADDRESS, "Mint to the zero address");
    util.assert(!this._exists(tokenId), "Token already minted");

    this.owners.set(tokenId, to);
    this.tokenURIs.set(tokenId, uri);
    
    this._addTokenToOwnerEnumeration(to, tokenId);
    this.balances.set(to, this.balances.get(to, 0) + 1);
    
    this._totalSupply += 1;
    Host.emitEvent("Mint", [ZERO_ADDRESS, to, Bytes.fromU64(tokenId), Bytes.fromString(uri)]);
  }

  @mutateState
  burn(tokenId: u64): void {
    const caller = Context.caller();
    const owner = this.ownerOf(tokenId);
    util.assert(this._isApprovedOrOwner(caller, tokenId), "Caller is not token owner or approved");

    this._removeTokenFromOwnerEnumeration(owner, tokenId);
    this.balances.set(owner, this.balances.get(owner, 0) - 1);
    
    this.owners.set(tokenId, ZERO_ADDRESS);
    this.tokenApprovals.delete(tokenId);
    this.tokenURIs.delete(tokenId);
    
    this._totalSupply -= 1;
    Host.emitEvent("Burn", [owner, ZERO_ADDRESS, Bytes.fromU64(tokenId)]);
  }

  @view
  _exists(tokenId: u64): bool {
    return this.owners.get(tokenId, ZERO_ADDRESS) != ZERO_ADDRESS;
  }

  @view
  _isApprovedOrOwner(spender: Address, tokenId: u64): bool {
    const owner = this.ownerOf(tokenId);
    return (spender == owner || this.isApprovedForAll(owner, spender) || this.getApproved(tokenId) == spender);
  }

  @view
  _requireMinted(tokenId: u64): void {
    util.assert(this._exists(tokenId), "Invalid token ID");
  }

  private _addTokenToOwnerEnumeration(owner: Address, tokenId: u64): void {
    const key = owner.toHex() + ":" + tokenId.toString();
    this.ownerTokens.set(key, tokenId);
  }
  
  private _removeTokenFromOwnerEnumeration(owner: Address, tokenId: u64): void {
    const key = owner.toHex() + ":" + tokenId.toString();
    this.ownerTokens.delete(key);
  }
}
