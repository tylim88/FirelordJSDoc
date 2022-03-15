---
sidebar_position: 1
---

# Firelord

## Firelord(caller)

`Firelord` is not run time code, it is a type that generates **[MetaType](#metatypeoutput)** for collection, every collection need a `MetaType`.

```ts
type Firelord<Base, CollectionID, DocID, Parent, Settings> = MetaType
```

| Generic      | Extend                               | Default | Description                                                                         |
| ------------ | ------------------------------------ | ------- | ----------------------------------------------------------------------------------- |
| Base         | `Record<string, unknown>`            | `never` | base data type, Firelord will translate it into `read`, `write` and `compare` types |
| CollectionID | `string literal`                     | `never` | type of collection ID, only accept `string literal`                                 |
| DocId        | `string`                             | `never` | type of document ID, can be string literal, but normally `string`                   |
| Parent       | `MetaType`                           | `never` | `MetaType` of parent. If this is top level collection, leave this empty or `never`  |
| Settings     | see **[settings](#settingsgeneric)** |

## Settings(generic)

Configure how `Firelord` translate `Base` type.

```ts
type Settings = { allFieldsPossiblyUndefined?: boolean; banNull?: boolean }
```

| Index                      | Default | Description                                               |
| -------------------------- | ------- | --------------------------------------------------------- |
| allFieldsPossiblyUndefined | `false` | if true, union all fields in `read` type with `undefined` |
| banNull                    | `false` | if true, replace every `null` type with an error message  |

## MetaType(output)

`MetaType` is an output type, created by `Firelord`. It does not require any configuration and you can extract information from it.

```ts
type MetaTypes = {
	collectionPath: string
	collectionID: string
	docPath: string
	docID: string
	read: Record<string, unknown>
	write: Record<string, unknown>
	writeFlatten: Record<string, unknown>
	compare: Record<string, unknown>
	base: Record<string, unknown>
	ancestors: { docID: string; collectionID: string }[]
}
```

| Index          | Description                                                                                    |
| -------------- | ---------------------------------------------------------------------------------------------- |
| collectionPath | full path of the collection                                                                    |
| collectionID   | last segment of the `collectionPath`                                                           |
| docPath        | full path of the document                                                                      |
| docID          | last segment of the `docPath`                                                                  |
| read           | translated type, is further translated into readFlatten(unexposed), use in all read operations |
| write          | translated type, use in all add and set operations                                             |
| writeFlatten   | translated type, use in all update operations                                                  |
| compare        | translated type, also a flatten type, use in query                                             |
| base           | the `base` type defined in `Firelord`                                                          |