---
sidebar_position: 1
---

# MetaTypeCreator

## Basic Usage

```ts
import { MetaTypeCreator } from 'firelordjs'

export type Parent = MetaTypeCreator<
	{
		a: number
	},
	'IAmParent',
	string
>

export type Child = MetaTypeCreator<
	{
		b
	},
	'IAmChild',
	string,
	Parent // place the parent here
>
```

## MetaTypeCreator(caller)

`MetaTypeCreator` is not runtime code, it is a type that generates **[MetaType](#metatypeoutput)** for collection, every collection need a `MetaType`.

```ts
type MetaTypeCreator<Base, CollectionID, DocID, Parent, Settings> = MetaType
```

| Generic      | Extends                           | Default  | Description                                                                                |
| ------------ | --------------------------------- | -------- | ------------------------------------------------------------------------------------------ |
| Base         | `Record<string, unknown>`         | required | base data type, MetaTypeCreator will translate it into `read`, `write` and `compare` types |
| CollectionID | `string literal`                  | required | type of collection ID, only accept `string literal`                                        |
| DocId        | `string`                          | required | type of document ID, can be `string literal`, but normally `string`                        |
| Parent       | `MetaType`                        | `never`  | `MetaType` of parent. If this is top level collection, leave this empty or `never`         |
| Settings     | see **[settings](#settingsargs)** |

## Settings(generic)

Configure how `MetaTypeCreator` translate `Base` type.

```ts
type Settings = { allFieldsPossiblyReadAsUndefined; banNull }
```

| Index                            | Type      | Default | Description                                                                            |
| -------------------------------- | --------- | ------- | -------------------------------------------------------------------------------------- |
| allFieldsPossiblyReadAsUndefined | `boolean` | `false` | if `true`, union all fields(including object in array) in `read` type with `undefined` |
| banNull                          | `boolean` | `false` | if `true`, replace every `null` type with an error message                             |

## MetaType(return)

`MetaType` is type return by `MetaTypeCreator`. It does not require any configuration and you can extract information from it.

```ts
type MetaTypes = {
	collectionPath
	collectionID
	docPath
	docID
	read
	write
	writeFlatten
	compare
	base
	ancestors
}
```

| Index          | Type                          | Description                                                                                        |
| -------------- | ----------------------------- | -------------------------------------------------------------------------------------------------- |
| collectionPath | `string`                      | full path of the collection                                                                        |
| collectionID   | `string`                      | last segment of the `collectionPath`                                                               |
| docPath        | `string`                      | full path of the document                                                                          |
| docID          | `string`                      | last segment of the `docPath`                                                                      |
| read           | `Record<string, unknown>`     | translated type, and is further translated into readFlatten(unexposed), use in all read operations |
| write          | `Record<string, unknown>`     | translated type, use in all add and set operations                                                 |
| writeFlatten   | `Record<string, unknown>`     | translated type, use in all update operations                                                      |
| compare        | `Record<string, unknown>`     | translated type, also a flatten type, use in query                                                 |
| base           | `Record<string, unknown>`     | the `Base` type defined in `MetaTypeCreator`                                                       |
| ancestors      | `{ docID,; collectionID, }[]` | list of all ancestors                                                                              |
