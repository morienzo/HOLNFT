[idena-sdk-js](../README.md) / [<internal\>](../modules/internal_.md) / BaseProvider

# Class: BaseProvider

[<internal>](../modules/internal_.md).BaseProvider

## Hierarchy

- **`BaseProvider`**

  ↳ [`BcnProvider`](BcnProvider.md)

  ↳ [`ContractProvider`](ContractProvider.md)

  ↳ [`DnaProvider`](DnaProvider.md)

  ↳ [`IdenaProvider`](IdenaProvider.md)

## Table of contents

### Constructors

- [constructor](internal_.BaseProvider.md#constructor)

### Properties

- [\_httpProvider](internal_.BaseProvider.md#_httpprovider)

### Methods

- [doRequest](internal_.BaseProvider.md#dorequest)

## Constructors

### constructor

• **new BaseProvider**(`httpProvider`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `httpProvider` | `AxiosInstance` |

## Properties

### \_httpProvider

• `Protected` **\_httpProvider**: `AxiosInstance`

#### Defined in

[providers/provider.ts:5](https://github.com/idena-network/idena-sdk-js/blob/master/src/providers/provider.ts#L5)

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
