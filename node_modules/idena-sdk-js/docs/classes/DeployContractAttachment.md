[idena-sdk-js](../README.md) / DeployContractAttachment

# Class: DeployContractAttachment

## Table of contents

### Constructors

- [constructor](DeployContractAttachment.md#constructor)

### Properties

- [\_args](DeployContractAttachment.md#_args)
- [\_codeHash](DeployContractAttachment.md#_codehash)

### Accessors

- [args](DeployContractAttachment.md#args)
- [codeHash](DeployContractAttachment.md#codehash)

### Methods

- [fromBytes](DeployContractAttachment.md#frombytes)
- [getArgs](DeployContractAttachment.md#getargs)
- [setArgs](DeployContractAttachment.md#setargs)
- [toBytes](DeployContractAttachment.md#tobytes)

## Constructors

### constructor

• **new DeployContractAttachment**(`init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | `Partial`<{ `args`: `Uint8Array`[] ; `codeHash`: [`EmbeddedContractType`](../enums/EmbeddedContractType.md)  }\> |

## Properties

### \_args

• `Private` **\_args**: `Uint8Array`[]

#### Defined in

[models/transactions/attachments/contracts/deployContractAttachment.ts:11](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/transactions/attachments/contracts/deployContractAttachment.ts#L11)

___

### \_codeHash

• `Private` **\_codeHash**: [`EmbeddedContractType`](../enums/EmbeddedContractType.md)

#### Defined in

[models/transactions/attachments/contracts/deployContractAttachment.ts:10](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/transactions/attachments/contracts/deployContractAttachment.ts#L10)

## Accessors

### args

• `get` **args**(): `Uint8Array`[]

#### Returns

`Uint8Array`[]

• `set` **args**(`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Uint8Array`[] |

#### Returns

`void`

___

### codeHash

• `get` **codeHash**(): `number`

#### Returns

`number`

• `set` **codeHash**(`codeHash`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `codeHash` | `number` |

#### Returns

`void`

## Methods

### fromBytes

▸ **fromBytes**(`bytes`): [`DeployContractAttachment`](DeployContractAttachment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`DeployContractAttachment`](DeployContractAttachment.md)

___

### getArgs

▸ **getArgs**(`formats`): [`ContractArgument`](../interfaces/ContractArgument.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `formats` | [`ContractArgumentFormat`](../enums/ContractArgumentFormat.md)[] |

#### Returns

[`ContractArgument`](../interfaces/ContractArgument.md)[]

___

### setArgs

▸ **setArgs**(`args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ContractArgument`](../interfaces/ContractArgument.md)[] |

#### Returns

`void`

___

### toBytes

▸ **toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`
