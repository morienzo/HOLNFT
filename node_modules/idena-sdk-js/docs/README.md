idena-sdk-js

# idena-sdk-js

## Table of contents

### Namespaces

- [&lt;internal\&gt;](modules/internal_.md)

### Enumerations

- [ContractArgumentFormat](enums/ContractArgumentFormat.md)
- [EmbeddedContractType](enums/EmbeddedContractType.md)
- [TransactionType](enums/TransactionType.md)

### Classes

- [BcnProvider](classes/BcnProvider.md)
- [CallContractAttachment](classes/CallContractAttachment.md)
- [ContractProvider](classes/ContractProvider.md)
- [DeployContractAttachment](classes/DeployContractAttachment.md)
- [DnaProvider](classes/DnaProvider.md)
- [IdenaProvider](classes/IdenaProvider.md)
- [JsonBalance](classes/JsonBalance.md)
- [JsonBlock](classes/JsonBlock.md)
- [JsonEpoch](classes/JsonEpoch.md)
- [JsonIdentity](classes/JsonIdentity.md)
- [JsonIterateMap](classes/JsonIterateMap.md)
- [JsonIterateMapItem](classes/JsonIterateMapItem.md)
- [JsonReceipt](classes/JsonReceipt.md)
- [JsonTransaction](classes/JsonTransaction.md)
- [TerminateContractAttachment](classes/TerminateContractAttachment.md)
- [Transaction](classes/Transaction.md)

### Interfaces

- [ContractArgument](interfaces/ContractArgument.md)

### Variables

- [DNA\_BASE](README.md#dna_base)

### Functions

- [argumentFromBytes](README.md#argumentfrombytes)
- [argumentToBytes](README.md#argumenttobytes)
- [argumentsFromBytes](README.md#argumentsfrombytes)
- [argumentsToBytes](README.md#argumentstobytes)
- [calculateGasCost](README.md#calculategascost)
- [dnaToFloatString](README.md#dnatofloatstring)
- [floatStringToDna](README.md#floatstringtodna)
- [hexToUint8Array](README.md#hextouint8array)
- [privateKeyToAddress](README.md#privatekeytoaddress)
- [privateKeyToPublicKey](README.md#privatekeytopublickey)
- [publicKeyToAddress](README.md#publickeytoaddress)
- [sender](README.md#sender)
- [sign](README.md#sign)
- [stripHexPrefix](README.md#striphexprefix)
- [toHexString](README.md#tohexstring)

## Variables

### DNA\_BASE

• `Const` **DNA\_BASE**: ``"1000000000000000000"``

#### Defined in

[utils.ts:6](https://github.com/idena-network/idena-sdk-js/blob/master/src/utils.ts#L6)

## Functions

### argumentFromBytes

▸ **argumentFromBytes**(`format`, `index`, `bytes`): [`ContractArgument`](interfaces/ContractArgument.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`ContractArgumentFormat`](enums/ContractArgumentFormat.md) |
| `index` | `number` |
| `bytes` | `Uint8Array` |

#### Returns

[`ContractArgument`](interfaces/ContractArgument.md)

___

### argumentToBytes

▸ **argumentToBytes**(`data`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ContractArgument`](interfaces/ContractArgument.md) |

#### Returns

`Uint8Array`

___

### argumentsFromBytes

▸ **argumentsFromBytes**(`formats`, `bytes`): [`ContractArgument`](interfaces/ContractArgument.md)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `formats` | [`ContractArgumentFormat`](enums/ContractArgumentFormat.md)[] |
| `bytes` | `Uint8Array`[] |

#### Returns

[`ContractArgument`](interfaces/ContractArgument.md)[]

___

### argumentsToBytes

▸ **argumentsToBytes**(`args`): `Uint8Array`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | [`ContractArgument`](interfaces/ContractArgument.md)[] |

#### Returns

`Uint8Array`[]

___

### calculateGasCost

▸ **calculateGasCost**(`feePerGas`, `gas`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `feePerGas` | `string` \| `BN` |
| `gas` | `number` |

#### Returns

`string`

___

### dnaToFloatString

▸ **dnaToFloatString**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` \| `BN` |

#### Returns

`string`

___

### floatStringToDna

▸ **floatStringToDna**(`value`): `BN`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`BN`

___

### hexToUint8Array

▸ **hexToUint8Array**(`hexString`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `hexString` | `string` |

#### Returns

`Uint8Array`

___

### privateKeyToAddress

▸ **privateKeyToAddress**(`key`, `withPrefix?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` \| `Uint8Array` \| `number`[] | `undefined` |
| `withPrefix` | `boolean` | `true` |

#### Returns

`string`

___

### privateKeyToPublicKey

▸ **privateKeyToPublicKey**(`key`, `withPrefix?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `key` | `string` \| `Uint8Array` \| `number`[] | `undefined` |
| `withPrefix` | `boolean` | `false` |

#### Returns

`string`

___

### publicKeyToAddress

▸ **publicKeyToAddress**(`publicKey`, `withPrefix?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `publicKey` | `string` \| `Uint8Array` \| `number`[] | `undefined` |
| `withPrefix` | `boolean` | `true` |

#### Returns

`string`

___

### sender

▸ **sender**(`data`, `signature`, `withPrefix?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `Uint8Array` \| `number`[] | `undefined` |
| `signature` | `Uint8Array` \| `number`[] | `undefined` |
| `withPrefix` | `boolean` | `true` |

#### Returns

`string`

___

### sign

▸ **sign**(`data`, `key`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` \| `number`[] |
| `key` | `string` \| `Uint8Array` \| `number`[] |

#### Returns

`Uint8Array`

___

### stripHexPrefix

▸ **stripHexPrefix**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

___

### toHexString

▸ **toHexString**(`byteArray`, `withPrefix?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `byteArray` | `Uint8Array` \| `number`[] | `undefined` |
| `withPrefix` | `boolean` | `true` |

#### Returns

`string`
