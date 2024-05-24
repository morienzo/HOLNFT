[idena-sdk-js](../README.md) / JsonIdentity

# Class: JsonIdentity

## Table of contents

### Constructors

- [constructor](JsonIdentity.md#constructor)

### Properties

- [address](JsonIdentity.md#address)
- [age](JsonIdentity.md#age)
- [availableFlips](JsonIdentity.md#availableflips)
- [code](JsonIdentity.md#code)
- [delegatee](JsonIdentity.md#delegatee)
- [delegationEpoch](JsonIdentity.md#delegationepoch)
- [delegationNonce](JsonIdentity.md#delegationnonce)
- [flipKeyWordPairs](JsonIdentity.md#flipkeywordpairs)
- [flips](JsonIdentity.md#flips)
- [generation](JsonIdentity.md#generation)
- [invitees](JsonIdentity.md#invitees)
- [inviter](JsonIdentity.md#inviter)
- [invites](JsonIdentity.md#invites)
- [isPool](JsonIdentity.md#ispool)
- [lastValidationFlags](JsonIdentity.md#lastvalidationflags)
- [madeFlips](JsonIdentity.md#madeflips)
- [online](JsonIdentity.md#online)
- [penalty](JsonIdentity.md#penalty)
- [profileHash](JsonIdentity.md#profilehash)
- [pubkey](JsonIdentity.md#pubkey)
- [requiredFlips](JsonIdentity.md#requiredflips)
- [shardId](JsonIdentity.md#shardid)
- [stake](JsonIdentity.md#stake)
- [state](JsonIdentity.md#state)
- [totalQualifiedFlips](JsonIdentity.md#totalqualifiedflips)
- [totalShortFlipPoints](JsonIdentity.md#totalshortflippoints)

## Constructors

### constructor

• **new JsonIdentity**(`address`, `profileHash`, `stake`, `invites`, `age`, `state`, `pubkey`, `requiredFlips`, `availableFlips`, `flipKeyWordPairs`, `madeFlips`, `totalQualifiedFlips`, `totalShortFlipPoints`, `flips`, `online`, `generation`, `code`, `invitees`, `penalty`, `lastValidationFlags`, `delegatee`, `delegationEpoch`, `delegationNonce`, `isPool`, `inviter`, `shardId`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `profileHash` | `string` |
| `stake` | `string` |
| `invites` | `number` |
| `age` | `number` |
| `state` | `string` |
| `pubkey` | `string` |
| `requiredFlips` | `number` |
| `availableFlips` | `number` |
| `flipKeyWordPairs` | [`JsonFlipWords`](internal_.JsonFlipWords.md)[] |
| `madeFlips` | `number` |
| `totalQualifiedFlips` | `number` |
| `totalShortFlipPoints` | `number` |
| `flips` | `string`[] |
| `online` | `boolean` |
| `generation` | `number` |
| `code` | `string` |
| `invitees` | [`JsonTxAddr`](internal_.JsonTxAddr.md)[] |
| `penalty` | `string` |
| `lastValidationFlags` | `string`[] |
| `delegatee` | `string` |
| `delegationEpoch` | `number` |
| `delegationNonce` | `number` |
| `isPool` | `boolean` |
| `inviter` | [`JsonInviter`](internal_.JsonInviter.md) |
| `shardId` | `number` |

## Properties

### address

• **address**: `string`

#### Defined in

[models/json/index.ts:79](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L79)

___

### age

• **age**: `number`

#### Defined in

[models/json/index.ts:83](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L83)

___

### availableFlips

• **availableFlips**: `number`

#### Defined in

[models/json/index.ts:87](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L87)

___

### code

• **code**: `string`

#### Defined in

[models/json/index.ts:95](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L95)

___

### delegatee

• **delegatee**: `string`

#### Defined in

[models/json/index.ts:99](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L99)

___

### delegationEpoch

• **delegationEpoch**: `number`

#### Defined in

[models/json/index.ts:100](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L100)

___

### delegationNonce

• **delegationNonce**: `number`

#### Defined in

[models/json/index.ts:101](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L101)

___

### flipKeyWordPairs

• **flipKeyWordPairs**: [`JsonFlipWords`](internal_.JsonFlipWords.md)[]

#### Defined in

[models/json/index.ts:88](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L88)

___

### flips

• **flips**: `string`[]

#### Defined in

[models/json/index.ts:92](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L92)

___

### generation

• **generation**: `number`

#### Defined in

[models/json/index.ts:94](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L94)

___

### invitees

• **invitees**: [`JsonTxAddr`](internal_.JsonTxAddr.md)[]

#### Defined in

[models/json/index.ts:96](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L96)

___

### inviter

• **inviter**: [`JsonInviter`](internal_.JsonInviter.md)

#### Defined in

[models/json/index.ts:103](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L103)

___

### invites

• **invites**: `number`

#### Defined in

[models/json/index.ts:82](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L82)

___

### isPool

• **isPool**: `boolean`

#### Defined in

[models/json/index.ts:102](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L102)

___

### lastValidationFlags

• **lastValidationFlags**: `string`[]

#### Defined in

[models/json/index.ts:98](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L98)

___

### madeFlips

• **madeFlips**: `number`

#### Defined in

[models/json/index.ts:89](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L89)

___

### online

• **online**: `boolean`

#### Defined in

[models/json/index.ts:93](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L93)

___

### penalty

• **penalty**: `string`

#### Defined in

[models/json/index.ts:97](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L97)

___

### profileHash

• **profileHash**: `string`

#### Defined in

[models/json/index.ts:80](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L80)

___

### pubkey

• **pubkey**: `string`

#### Defined in

[models/json/index.ts:85](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L85)

___

### requiredFlips

• **requiredFlips**: `number`

#### Defined in

[models/json/index.ts:86](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L86)

___

### shardId

• **shardId**: `number`

#### Defined in

[models/json/index.ts:104](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L104)

___

### stake

• **stake**: `string`

#### Defined in

[models/json/index.ts:81](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L81)

___

### state

• **state**: `string`

#### Defined in

[models/json/index.ts:84](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L84)

___

### totalQualifiedFlips

• **totalQualifiedFlips**: `number`

#### Defined in

[models/json/index.ts:90](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L90)

___

### totalShortFlipPoints

• **totalShortFlipPoints**: `number`

#### Defined in

[models/json/index.ts:91](https://github.com/idena-network/idena-sdk-js/blob/master/src/models/json/index.ts#L91)
