import { IdenaProvider } from './idenaProvider';

describe('provider', () => {
  it('can build and send tx', async () => {
    const provider = IdenaProvider.create('http://localhost:9009', 'api-key');

    const buildTx = await provider.Blockchain.buildTx({
      from: '0xdce68cb5b9528056c9cc0c071479315f25fc619e',
      to: '0xdce68cb5b9528056c9cc0c071479315f25fc619e',
      amount: '22',
      maxFee: '33',
      payload: [0x1, 0x2, 0x3],
    });

    console.log(buildTx.toHex());
  });
});
