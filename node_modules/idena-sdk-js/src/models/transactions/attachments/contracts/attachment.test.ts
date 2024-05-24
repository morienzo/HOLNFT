import { CallContractAttachment } from './callContractAttachment';
import { DeployContractAttachment } from './deployContractAttachment';
import { TerminateContractAttachment } from './terminateContractAttachment';
import { ContractArgumentFormat, EmbeddedContractType } from './types';

describe('deploy contract attachment', () => {
  it('convert', () => {
    const attachment = new DeployContractAttachment({
      codeHash: EmbeddedContractType.OracleVotingContract,
    });

    const args = [
      {
        index: 0,
        format: ContractArgumentFormat.Bigint,
        value: '109898989898989898',
      },
      { index: 1, format: ContractArgumentFormat.Uint64, value: '9999991122' },
      {
        index: 4,
        format: ContractArgumentFormat.String,
        value: 'hello world',
      },
    ];

    attachment.setArgs(args);

    const bytes = attachment.toBytes();

    const attachment2 = new DeployContractAttachment().fromBytes(bytes);

    const parsedArgs = attachment2.getArgs([
      ContractArgumentFormat.Bigint,
      ContractArgumentFormat.Uint64,
      ContractArgumentFormat.Byte,
      ContractArgumentFormat.Hex,
      ContractArgumentFormat.String,
    ]);

    expect(attachment2.codeHash).toBe(
      EmbeddedContractType.OracleVotingContract,
    );

    expect(parsedArgs[0]?.value).toBe('109898989898989898');
    expect(parsedArgs[0]?.index).toBe(0);

    expect(parsedArgs[1]?.value).toBe('9999991122');
    expect(parsedArgs[1]?.index).toBe(1);

    expect(parsedArgs[2]?.value).toBe(null);
    expect(parsedArgs[2]?.index).toBe(2);

    expect(parsedArgs[3]?.value).toBe(null);
    expect(parsedArgs[3]?.index).toBe(3);

    expect(parsedArgs[4]?.value).toBe('hello world');
    expect(parsedArgs[4]?.index).toBe(4);
  });
});

describe('call contract attachment', () => {
  it('convert', () => {
    const attachment = new CallContractAttachment({ method: 'test' });

    const args = [
      { index: 0, format: ContractArgumentFormat.Dna, value: '10' },
      { index: 1, format: ContractArgumentFormat.Byte, value: 250 },
      { index: 3, format: ContractArgumentFormat.Hex, value: '0xaabbcc' },
    ];

    attachment.setArgs(args);

    const bytes = attachment.toBytes();

    const attachment2 = new CallContractAttachment().fromBytes(bytes);

    const parsedArgs = attachment2.getArgs([
      ContractArgumentFormat.Dna,
      ContractArgumentFormat.Byte,
      ContractArgumentFormat.Byte,
      ContractArgumentFormat.Hex,
    ]);

    expect(attachment2.method).toBe('test');

    expect(parsedArgs[0]?.value).toBe('10');
    expect(parsedArgs[0]?.index).toBe(0);

    expect(parsedArgs[1]?.value).toBe(250);
    expect(parsedArgs[1]?.index).toBe(1);

    expect(parsedArgs[2]?.value).toBe(null);
    expect(parsedArgs[2]?.index).toBe(2);

    expect(parsedArgs[3]?.value).toBe('0xaabbcc');
    expect(parsedArgs[3]?.index).toBe(3);
  });
});

describe('call contract attachment', () => {
  it('convert', () => {
    const attachment = new TerminateContractAttachment();

    const args = [
      { index: 1, format: ContractArgumentFormat.Byte, value: 250 },
      { index: 0, format: ContractArgumentFormat.Uint64, value: '10' },
      { index: 3, format: ContractArgumentFormat.Dna, value: '123.987' },
    ];

    attachment.setArgs(args);

    const bytes = attachment.toBytes();

    const attachment2 = new TerminateContractAttachment().fromBytes(bytes);

    const parsedArgs = attachment2.getArgs([
      ContractArgumentFormat.Uint64,
      ContractArgumentFormat.Byte,
      ContractArgumentFormat.String,
      ContractArgumentFormat.Dna,
    ]);

    expect(parsedArgs[0]?.value).toBe('10');
    expect(parsedArgs[0]?.index).toBe(0);

    expect(parsedArgs[1]?.value).toBe(250);
    expect(parsedArgs[1]?.index).toBe(1);

    expect(parsedArgs[2]?.value).toBe(null);
    expect(parsedArgs[2]?.index).toBe(2);

    expect(parsedArgs[3]?.value).toBe('123.987');
    expect(parsedArgs[3]?.index).toBe(3);
  });
});
