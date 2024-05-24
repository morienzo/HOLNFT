[idena-sdk-js](../README.md) / CallContractAttachment

# Class: CallContractAttachment

## Table of contents

### Constructors

- [constructor](CallContractAttachment.md#constructor)

### Properties

- [\_args](CallContractAttachment.md#_args)
- [\_method](CallContractAttachment.md#_method)

### Accessors

- [args](CallContractAttachment.md#args)
- [method](CallContractAttachment.md#method)

### Methods

- [fromBytes](CallContractAttachment.md#frombytes)
- [getArgs](CallContractAttachment.md#getargs)
- [setArgs](CallContractAttachment.md#setargs)
- [toBytes](CallContractAttachment.md#tobytes)

## Constructors

### constructor

• **new CallContractAttachment**(`init?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `init?` | `Partial`<{ `args`: `Uint8Array`[] ; `method`: `string`  }\> |

## Properties

### \_args

• `Private` **\_args**: `Uint8Array`[]

#### Defined in

[models/transactions/attachments/contracts/callContractAttachment.ts:7](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/transactions/attachments/contracts/callContractAttachment.ts#L7)

___

### \_method

• `Private` **\_method**: `string`

#### Defined in

[models/transactions/attachments/contracts/callContractAttachment.ts:6](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/transactions/attachments/contracts/callContractAttachment.ts#L6)

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

### method

• `get` **method**(): `string`

#### Returns

`string`

• `set` **method**(`method`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `string` |

#### Returns

`void`

## Methods

### fromBytes

▸ **fromBytes**(`bytes`): [`CallContractAttachment`](CallContractAttachment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`CallContractAttachment`](CallContractAttachment.md)

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

▸ **setArgs**(`args`): [`CallContractAttachment`](CallContractAttachment.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ContractArgument`](../interfaces/ContractArgument.md)[] |

#### Returns

[`CallContractAttachment`](CallContractAttachment.md)

___

### toBytes

▸ **toBytes**(): `Uint8Array`

#### Returns

`Uint8Array`
