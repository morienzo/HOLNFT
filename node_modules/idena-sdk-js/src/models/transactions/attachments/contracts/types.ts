export enum EmbeddedContractType {
  TimeLockContract = 1,
  OracleVotingContract = 2,
  OracleLockContract = 3,
  RefundableOracleLockContract = 4,
  MultisigContract = 5,
}

export enum ContractArgumentFormat {
  Default = 'default',
  Byte = 'byte',
  Int8 = 'int8',
  Uint64 = 'uint64',
  Int64 = 'int64',
  String = 'string',
  Bigint = 'bigint',
  Hex = 'hex',
  Dna = 'dna',
}

export interface ContractArgument {
  index: number;
  format: ContractArgumentFormat;
  value: any;
}
