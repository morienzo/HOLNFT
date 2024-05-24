[idena-sdk-js](../README.md) / TerminateContractAttachment

# Class: TerminateContractAttachment

## Table of contents

### Constructors

- [constructor](TerminateContractAttachment.md#constructor)

### Properties

- [\_args](TerminateContractAttachment.md#_args)

### Accessors

- [args](TerminateContractAttachment.md#args)

### Methods

- [fromBytes](TerminateContractAttachment.md#frombytes)
- [getArgs](TerminateContractAttachment.md#getargs)
- [setArgs](TerminateContractAttachment.md#setargs)
- [toBytes](TerminateContractAttachment.md#tobytes)

## Constructors

### constructor

• **new TerminateContractAttachment**(`init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | `Partial`<{ `args`: `Uint8Array`[]  }\> |

## Properties

### \_args

• `Private` **\_args**: `Uint8Array`[]

#### Defined in

[models/transactions/attachments/contracts/terminateContractAttachment.ts:6](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/transactions/attachments/contracts/terminateContractAttachment.ts#L6)

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

## Methods

### fromBytes

▸ **fromBytes**(`bytes`): [`TerminateContractAttachment`](TerminateContractAttachment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`TerminateContractAttachment`](TerminateContractAttachment.md)

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
