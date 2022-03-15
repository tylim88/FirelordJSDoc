---
sidebar_position: 2
---

# getFirelord

## Basic Usage

```ts
// import Example MetaType
import { getFirestore } from 'firebase/firestore'
import { Firelord, getFirelord } from 'firelordjs'

const firelordRef = getFirelord(getFirestore())
```

`Example` is **[MetaType](../defineYourType/firelordRef#metatypeoutput)** return of `Firelord`.
Keep in mind you need to initialize firebase before you call `getFirestore`

## getFirelord(caller)

return a **[firelordRef](#firelordRef)** function where you can use to generates references(document, collection and collection group)

```ts
const getFirelord = firestore => firelordRef
```

| Parameter | Type      | Description                  |
| --------- | --------- | ---------------------------- |
| firestore | Firestore | firebase firestore reference |

## firelordRef(return)

see [**firelordRef**](../defineYourType/firelordRef.md)
