---
sidebar_position: 2
---

# getFirelord

## Basic Usage

```ts
import { getFirelord } from 'firelordjs'

const firelordRef = getFirelord()
```

`Example` is **[MetaType](../defineYourType/firelordRef#metatypeoutput)** return of `Firelord`.
Keep in mind you need to initialize firebase before you call `getFirelord`

## getFirelord(caller)

return a **[firelordRef](../defineYourType/firelordRef)** function where you can use to generates references(document, collection and collection group)

```ts
const getFirelord = firestore => firelordRef
```

| Parameter | Type      | Description                  |
| --------- | --------- | ---------------------------- |
| firestore | Firestore | Firebase Firestore reference |

## firelordRef(return)

see [**firelordRef**](../defineYourType/firelordRef)
