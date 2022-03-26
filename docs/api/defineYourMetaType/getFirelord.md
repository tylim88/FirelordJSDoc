---
sidebar_position: 2
---

# getFirelord

## Basic Usage

```ts
// import Example (MetaType, return of MetaTypeCreator)
import { getFirelord } from 'firelordjs'

export const firelordRef = getFirelord<Example>()
```

`Example` is **[MetaType](../defineYourMetaType/firelordRef#metatypeoutput)** return of `MetaTypeCreator`.
Keep in mind you need to initialize firebase before you call `getFirelord`

## getFirelord(caller)

return a **[firelordRef](../defineYourMetaType/firelordRef)** function where you can use to generates references(document, collection and collection group)

```ts
const getFirelord = <MetaType>(firestore) => firelordRef
```

| Generic  | Type       | Description                                                               |
| -------- | ---------- | ------------------------------------------------------------------------- |
| MetaType | `MetaType` | see **[MetaType](../defineYourMetaType/metaTypeCreator#metatypereturn)**. |

| Parameter | Type                       | Default        | Description                  |
| --------- | -------------------------- | -------------- | ---------------------------- |
| firestore | `Firestore` \| `undefined` | getFirestore() | Firebase Firestore reference |

## firelordRef(return)

see [**firelordRef**](../defineYourMetaType/firelordRef)
