[idena-sdk-js](../README.md) / BcnProvider

# Class: BcnProvider

## Hierarchy

- [`BaseProvider`](internal_.BaseProvider.md)

  ↳ **`BcnProvider`**

## Table of contents

### Constructors

- [constructor](BcnProvider.md#constructor)

### Properties

- [\_httpProvider](BcnProvider.md#_httpprovider)

### Methods

- [block](BcnProvider.md#block)
- [blockAt](BcnProvider.md#blockat)
- [buildTx](BcnProvider.md#buildtx)
- [doRequest](BcnProvider.md#dorequest)
- [estimateTx](BcnProvider.md#estimatetx)
- [feePerGas](BcnProvider.md#feepergas)
- [lastBlock](BcnProvider.md#lastblock)
- [receipt](BcnProvider.md#receipt)
- [sendTx](BcnProvider.md#sendtx)
- [transaction](BcnProvider.md#transaction)
- [create](BcnProvider.md#create)

## Constructors

### constructor

• **new BcnProvider**(`httpProvider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpProvider` | `AxiosInstance` |

#### Overrides

[BaseProvider](internal_.BaseProvider.md).[constructor](internal_.BaseProvider.md#constructor)

## Properties

### \_httpProvider

• `Protected` **\_httpProvider**: `AxiosInstance`

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_httpProvider](internal_.BaseProvider.md#_httpprovider)

#### Defined in

[providers/provider.ts:5](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/provider.ts#L5)

## Methods

### block

▸ **block**(`hash`): `Promise`<[`JsonBlock`](JsonBlock.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |

#### Returns

`Promise`<[`JsonBlock`](JsonBlock.md)\>

___

### blockAt

▸ **blockAt**(`num`): `Promise`<[`JsonBlock`](JsonBlock.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `num` | `number` |

#### Returns

`Promise`<[`JsonBlock`](JsonBlock.md)\>

___

### buildTx

▸ **buildTx**(`data`): `Promise`<[`Transaction`](Transaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Partial`<{ `amount`: `string` ; `epoch`: `number` ; `from`: `string` ; `maxFee`: `string` ; `nonce`: `number` ; `payload`: `Uint8Array` \| `number`[] ; `tips`: `string` ; `to`: `string` ; `type`: [`TransactionType`](../enums/TransactionType.md)  }\> |

#### Returns

`Promise`<[`Transaction`](Transaction.md)\>

___

### doRequest

▸ **doRequest**(`obj`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `Object` |
| `obj.id?` | `number` |
| `obj.method` | `string` |
| `obj.params` | `any` |

#### Returns

`Promise`<`any`\>

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[doRequest](internal_.BaseProvider.md#dorequest)

___

### estimateTx

▸ **estimateTx**(`tx`): `Promise`<{ `receipt`: [`JsonReceipt`](JsonReceipt.md) ; `txFee`: `string` ; `txHash`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Transaction`](Transaction.md) |

#### Returns

`Promise`<{ `receipt`: [`JsonReceipt`](JsonReceipt.md) ; `txFee`: `string` ; `txHash`: `string`  }\>

___

### feePerGas

▸ **feePerGas**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

___

### lastBlock

▸ **lastBlock**(): `Promise`<[`JsonBlock`](JsonBlock.md)\>

#### Returns

`Promise`<[`JsonBlock`](JsonBlock.md)\>

___

### receipt

▸ **receipt**(`hash`): `Promise`<[`JsonReceipt`](JsonReceipt.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |

#### Returns

`Promise`<[`JsonReceipt`](JsonReceipt.md)\>

___

### sendTx

▸ **sendTx**(`tx`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tx` | [`Transaction`](Transaction.md) |

#### Returns

`Promise`<`string`\>

___

### transaction

▸ **transaction**(`hash`): `Promise`<[`JsonTransaction`](JsonTransaction.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `hash` | `string` |

#### Returns

`Promise`<[`JsonTransaction`](JsonTransaction.md)\>

___

### create

▸ `Static` **create**(`url`, `apiKey`): [`BcnProvider`](BcnProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `apiKey` | `string` |

#### Returns

[`BcnProvider`](BcnProvider.md)
