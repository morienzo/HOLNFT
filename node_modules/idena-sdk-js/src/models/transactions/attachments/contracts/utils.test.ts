import { ContractArgumentFormat } from './types';
import { argumentFromBytes, argumentToBytes } from './utils';

describe('convert args to bytes', () => {
  it('byte to bytes', () => {
    expect(
      argumentToBytes({
        index: 0,
        format: ContractArgumentFormat.Byte,
        value: 10,
      }),
    ).toEqual(new Uint8Array([10]));

    expect(
      argumentToBytes({
        index: 0,
        format: ContractArgumentFormat.Byte,
        value: 255,
      }),
    ).toStrictEqual(new Uint8Array([255]));

    expect(() =>
      argumentToBytes({
        index: 0,
        format: ContractArgumentFormat.Byte,
        value: 500,
      }),
    ).toThrow(/cannot parse byte at index 0/);
  });

  it('int8 to bytes', () => {
    expect(
      argumentToBytes({
        index: 0,
        format: ContractArgumentFormat.Int8,
        value: 0,
      }),
    ).toStrictEqual(new Uint8Array([0]));

    expect(
      argumentToBytes({
        index: 0,
        format: ContractArgumentFormat.Int8,
        value: 17,
      }),
    ).toStrictEqual(new Uint8Array([17]));

    expect(() =>
      argumentToBytes({
        index: 0,
        format: ContractArgumentFormat.Int8,
        value: 1231,
      }),
    ).toThrow(/cannot parse int8 at index 0/);
  });

  it('string to bytes', () => {
    expect(
      argumentToBytes({
        index: 0,
        format: ContractArgumentFormat.String,
        value: 'qwe-+!123',
      }),
    ).toStrictEqual(new Uint8Array([113, 119, 101, 45, 43, 33, 49, 50, 51]));

    expect(
      argumentToBytes({
        index: 0,
        format: ContractArgumentFormat.String,
        value: '',
      }),
    ).toStrictEqual(new Uint8Array());
  });

  it('hex to bytes', () => {
    expect(
      argumentToBytes({
        index: 0,
        format: ContractArgumentFormat.Hex,
        value: '0x1212ff',
      }),
    ).toStrictEqual(new Uint8Array([18, 18, 255]));
  });

  it('dna to bytes', () => {
    expect(
      argumentToBytes({
        index: 0,
        format: ContractArgumentFormat.Dna,
        value: '1.123',
      }),
    ).toStrictEqual(new Uint8Array([15, 149, 178, 140, 210, 195, 128, 0]));

    expect(
      argumentToBytes({
        index: 0,
        format: ContractArgumentFormat.Dna,
        value: '0.123456789123456789',
      }),
    ).toStrictEqual(new Uint8Array([1, 182, 155, 75, 172, 208, 95, 21]));
  });

  it('uint64 to bytes', () => {
    expect(
      argumentToBytes({
        index: 0,
        format: ContractArgumentFormat.Uint64,
        value: '9223372036854775807',
      }),
    ).toStrictEqual(new Uint8Array([255, 255, 255, 255, 255, 255, 255, 127]));

    expect(() =>
      argumentToBytes({
        index: 1,
        format: ContractArgumentFormat.Uint64,
        value: -1231,
      }),
    ).toThrow(/cannot parse uint64 at index 1/);
  });

  it('int64 to bytes', () => {
    expect(
      argumentToBytes({
        index: 0,
        format: ContractArgumentFormat.Int64,
        value: '9223372036854775807',
      }),
    ).toStrictEqual(new Uint8Array([255, 255, 255, 255, 255, 255, 255, 127]));

    expect(
      argumentToBytes({
        index: 0,
        format: ContractArgumentFormat.Int64,
        value: '-9223372036854775808',
      }),
    ).toStrictEqual(new Uint8Array([0, 0, 0, 0, 0, 0, 0, 128]));
  });
});

describe('convert bytes to args', () => {
  it('bytes to byte', () => {
    const value = 15;
    expect(
      argumentFromBytes(
        ContractArgumentFormat.Byte,
        0,
        argumentToBytes({
          index: 0,
          format: ContractArgumentFormat.Byte,
          value: value,
        }),
      ).value,
    ).toStrictEqual(value);

    const value2 = 300;

    expect(
      () =>
        argumentFromBytes(
          ContractArgumentFormat.Byte,
          0,
          argumentToBytes({
            index: 0,
            format: ContractArgumentFormat.Byte,
            value: value2,
          }),
        ).value,
    ).toThrow(/cannot parse byte at index 0/);
  });

  it('bytes to byte', () => {
    const value = 55;
    expect(
      argumentFromBytes(
        ContractArgumentFormat.Int8,
        0,
        argumentToBytes({
          index: 0,
          format: ContractArgumentFormat.Int8,
          value: value,
        }),
      ).value,
    ).toStrictEqual(value);

    const value2 = 555;

    expect(
      () =>
        argumentFromBytes(
          ContractArgumentFormat.Int8,
          0,
          argumentToBytes({
            index: 0,
            format: ContractArgumentFormat.Int8,
            value: value2,
          }),
        ).value,
    ).toThrow(/cannot parse int8 at index 0/);
  });

  it('bytes to uint64', () => {
    const value = '9223372036854775807';
    expect(
      argumentFromBytes(
        ContractArgumentFormat.Uint64,
        0,
        argumentToBytes({
          index: 0,
          format: ContractArgumentFormat.Uint64,
          value: value,
        }),
      ).value,
    ).toStrictEqual(value);

    const value2 = '-9223372036854775808';

    expect(
      () =>
        argumentFromBytes(
          ContractArgumentFormat.Uint64,
          0,
          argumentToBytes({
            index: 0,
            format: ContractArgumentFormat.Uint64,
            value: value2,
          }),
        ).value,
    ).toThrow(/cannot parse uint64 at index 0/);
  });

  it('bytes to int64', () => {
    const value = '9223372036854775807';
    expect(
      argumentFromBytes(
        ContractArgumentFormat.Int64,
        0,
        argumentToBytes({
          index: 0,
          format: ContractArgumentFormat.Int64,
          value: value,
        }),
      ).value,
    ).toStrictEqual(value);

    const value2 = '-9223372036854775808';

    expect(
      argumentFromBytes(
        ContractArgumentFormat.Int64,
        0,
        argumentToBytes({
          index: 0,
          format: ContractArgumentFormat.Int64,
          value: value2,
        }),
      ).value,
    ).toStrictEqual(value2);
  });

  it('bytes to string', () => {
    const value = 'helow world idena';
    expect(
      argumentFromBytes(
        ContractArgumentFormat.String,
        0,
        argumentToBytes({
          index: 0,
          format: ContractArgumentFormat.String,
          value: value,
        }),
      ).value,
    ).toStrictEqual(value);

    const value2 = 'abc';

    expect(
      argumentFromBytes(
        ContractArgumentFormat.String,
        0,
        argumentToBytes({
          index: 0,
          format: ContractArgumentFormat.String,
          value: value2,
        }),
      ).value,
    ).toStrictEqual(value2);
  });

  it('bytes to bigint', () => {
    const value = '123123123123123123123';
    expect(
      argumentFromBytes(
        ContractArgumentFormat.Bigint,
        0,
        argumentToBytes({
          index: 0,
          format: ContractArgumentFormat.Bigint,
          value: value,
        }),
      ).value,
    ).toStrictEqual(value);

    const value2 = '0';

    expect(
      argumentFromBytes(
        ContractArgumentFormat.Bigint,
        0,
        argumentToBytes({
          index: 0,
          format: ContractArgumentFormat.Bigint,
          value: value2,
        }),
      ).value,
    ).toStrictEqual(value2);
  });

  it('bytes to hex', () => {
    const value = '0xaabbcc001122';
    expect(
      argumentFromBytes(
        ContractArgumentFormat.Hex,
        0,
        argumentToBytes({
          index: 0,
          format: ContractArgumentFormat.Hex,
          value: value,
        }),
      ).value,
    ).toStrictEqual(value);

    const value2 = '0x0';

    expect(
      argumentFromBytes(
        ContractArgumentFormat.Hex,
        0,
        argumentToBytes({
          index: 0,
          format: ContractArgumentFormat.Hex,
          value: value2,
        }),
      ).value,
    ).toStrictEqual(null);
  });

  it('bytes to hex', () => {
    const value = '1.123456789123456789';
    expect(
      argumentFromBytes(
        ContractArgumentFormat.Dna,
        0,
        argumentToBytes({
          index: 0,
          format: ContractArgumentFormat.Dna,
          value: value,
        }),
      ).value,
    ).toStrictEqual(value);

    const value2 = '500.005';

    expect(
      argumentFromBytes(
        ContractArgumentFormat.Dna,
        0,
        argumentToBytes({
          index: 0,
          format: ContractArgumentFormat.Dna,
          value: value2,
        }),
      ).value,
    ).toStrictEqual(value2);
  });
});
