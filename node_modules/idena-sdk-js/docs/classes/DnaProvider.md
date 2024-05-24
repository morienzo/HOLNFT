[idena-sdk-js](../README.md) / DnaProvider

# Class: DnaProvider

## Hierarchy

- [`BaseProvider`](internal_.BaseProvider.md)

  ↳ **`DnaProvider`**

## Table of contents

### Constructors

- [constructor](DnaProvider.md#constructor)

### Properties

- [\_httpProvider](DnaProvider.md#_httpprovider)

### Methods

- [balance](DnaProvider.md#balance)
- [doRequest](DnaProvider.md#dorequest)
- [epoch](DnaProvider.md#epoch)
- [identity](DnaProvider.md#identity)
- [create](DnaProvider.md#create)

## Constructors

### constructor

• **new DnaProvider**(`httpProvider`)

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

### balance

▸ **balance**(`address`): `Promise`<[`JsonBalance`](JsonBalance.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<[`JsonBalance`](JsonBalance.md)\>

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

### epoch

▸ **epoch**(): `Promise`<[`JsonEpoch`](JsonEpoch.md)\>

#### Returns

`Promise`<[`JsonEpoch`](JsonEpoch.md)\>

___

### identity

▸ **identity**(`address?`): `Promise`<[`JsonIdentity`](JsonIdentity.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address?` | `string` |

#### Returns

`Promise`<[`JsonIdentity`](JsonIdentity.md)\>

___

### create

▸ `Static` **create**(`url`, `apiKey`): [`DnaProvider`](DnaProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `apiKey` | `string` |

#### Returns

[`DnaProvider`](DnaProvider.md)
