import { BN } from 'bn.js';
import { TransactionType } from '..';
import { hexToUint8Array } from '../..';
import { StoreToIpfsAttachment } from './attachments/storeToIpfsAttachment';
import { Transaction } from './transaction';

describe('transaction', () => {
  it('can be encoded and decoded', () => {
    const tx = new Transaction({
      epoch: 5,
      nonce: 11,
      type: TransactionType.ActivationTx,
      to: '0x010203',
      amount: new BN(10),
      maxFee: new BN(11),
      tips: new BN(12),
      payload: new Uint8Array([1, 2, 3]),
    });

    const parsed = new Transaction().fromBytes(tx.toBytes());

    expect(parsed.epoch).toBe(tx.epoch);
    expect(parsed.nonce).toBe(tx.nonce);
    expect(parsed.type).toBe(tx.type);
    expect(parsed.to).toBe(tx.to);
    expect(parsed.amount?.toString()).toBe(tx.amount?.toString());
    expect(parsed.maxFee?.toString()).toBe(tx.maxFee?.toString());
    expect(parsed.tips?.toString()).toBe(tx.tips?.toString());
    expect(parsed.payload).toStrictEqual(tx.payload);
  });

  it('signature test', () => {
    const tx = new Transaction({
      epoch: 101,
      nonce: 55,
      type: TransactionType.SubmitFlipTx,
      to: '0x01351c321aa2a8832c32c00745e352eb8a6782bc',
      amount: new BN(999),
      maxFee: new BN(555),
      tips: new BN(111),
      payload: new Uint8Array([0x11, 0x12, 0x13]),
    }).sign(__PRIVATE_KEY__);

    const nodeSignature =
      '29aa296e27542801de9d955594f9fafa47e0f2c0c035c760e3593dbb34cb360c321f6b5c5704c7ac68d74b3b73043b78b00583036fd7ecbd664ecb7df0dc910c01';

    expect(tx.signature).toStrictEqual(hexToUint8Array(nodeSignature));
    expect(tx.sender).toBe(__ADDRESS__);
  });

  it('signature test 2', () => {
    const tx = new Transaction({
      epoch: 55,
      nonce: 10,
      amount: new BN(500),
      payload: new Uint8Array([1, 2, 3]),
    }).sign(__PRIVATE_KEY__);

    const nodeSignature =
      'e59ab446590f84c2b4e23176dbb1558c755db477739485392a0384c4468494106a581f632ee7ac3e6405b5e677e1c8e52d4c6ede0337af1000d714d1681fe74d00';

    expect(tx.signature).toStrictEqual(hexToUint8Array(nodeSignature));
    expect(tx.sender).toBe(__ADDRESS__);
  });

  it('signature test 3', () => {
    const tx = new Transaction().fromHex(
      '0a290801100c180f2a09056bc75e2d6310000032082676179a205d70a03a010042090a0105120101120101',
    );

    tx.sign(__PRIVATE_KEY__);

    const nodeSignature =
      'dc824b4647dc6c254b75368bd51f943c5f6ab164a40c6ba1d60251314e705bdc245d26164cad78f7d2ecb5d96fd9409f72bd45e15515d9f312696d47b2847e3e01';

    expect(tx.signature).toStrictEqual(hexToUint8Array(nodeSignature));
    expect(tx.sender).toBe(__ADDRESS__);
  });

  it('calculate gas', () => {
    const tx = new Transaction({
      nonce: 100,
      epoch: 50,
      amount: '100000000',
      payload: [1, 2, 3, 4, 5],
    });

    expect(tx.gas).toBe(860);

    const tx2 = new Transaction({
      nonce: 100,
      epoch: 50,
      type: TransactionType.DeleteFlipTx,
      amount: '100000000',
      payload: [1, 2, 3, 4, 5],
    });

    expect(tx2.gas).toBe(1229680);

    const attachment = new StoreToIpfsAttachment({ size: 987 });

    const tx3 = new Transaction({
      nonce: 1,
      epoch: 1,
      type: TransactionType.StoreToIpfsTx,
      payload: attachment.toBytes(),
    });

    expect(tx3.gas).toBe(2770);
  });
});
