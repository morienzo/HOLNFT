[idena-sdk-js](../README.md) / IdenaProvider

# Class: IdenaProvider

## Hierarchy

- [`BaseProvider`](internal_.BaseProvider.md)

  ↳ **`IdenaProvider`**

## Table of contents

### Constructors

- [constructor](IdenaProvider.md#constructor)

### Properties

- [\_bcnProvider](IdenaProvider.md#_bcnprovider)
- [\_contractProvider](IdenaProvider.md#_contractprovider)
- [\_dnaProvider](IdenaProvider.md#_dnaprovider)
- [\_httpProvider](IdenaProvider.md#_httpprovider)

### Accessors

- [Blockchain](IdenaProvider.md#blockchain)
- [Contract](IdenaProvider.md#contract)
- [Dna](IdenaProvider.md#dna)

### Methods

- [doRequest](IdenaProvider.md#dorequest)
- [create](IdenaProvider.md#create)

## Constructors

### constructor

• **new IdenaProvider**(`httpProvider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpProvider` | `AxiosInstance` |

#### Overrides

[BaseProvider](internal_.BaseProvider.md).[constructor](internal_.BaseProvider.md#constructor)

## Properties

### \_bcnProvider

• `Private` **\_bcnProvider**: [`BcnProvider`](BcnProvider.md)

#### Defined in

[providers/idenaProvider.ts:9](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/idenaProvider.ts#L9)

___

### \_contractProvider

• `Private` **\_contractProvider**: [`ContractProvider`](ContractProvider.md)

#### Defined in

[providers/idenaProvider.ts:10](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/idenaProvider.ts#L10)

___

### \_dnaProvider

• `Private` **\_dnaProvider**: [`DnaProvider`](DnaProvider.md)

#### Defined in

[providers/idenaProvider.ts:11](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/idenaProvider.ts#L11)

___

### \_httpProvider

• `Protected` **\_httpProvider**: `AxiosInstance`

#### Inherited from

[BaseProvider](internal_.BaseProvider.md).[_httpProvider](internal_.BaseProvider.md#_httpprovider)

#### Defined in

[providers/provider.ts:5](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/provider.ts#L5)

## Accessors

### Blockchain

• `get` **Blockchain**(): [`BcnProvider`](BcnProvider.md)

#### Returns

[`BcnProvider`](BcnProvider.md)

___

### Contract

• `get` **Contract**(): [`ContractProvider`](ContractProvider.md)

#### Returns

[`ContractProvider`](ContractProvider.md)

___

### Dna

• `get` **Dna**(): [`DnaProvider`](DnaProvider.md)

#### Returns

[`DnaProvider`](DnaProvider.md)

## Methods

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

### create

▸ `Static` **create**(`url`, `apiKey`): [`IdenaProvider`](IdenaProvider.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `apiKey` | `string` |

#### Returns

[`IdenaProvider`](IdenaProvider.md)
