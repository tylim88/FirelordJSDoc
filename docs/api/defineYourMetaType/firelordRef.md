---
sidebar_position: 3
---

# firelordRef

## Basic Usage

```ts
// import firelordRef (return of getFirelord)

export const example = firelordRef<Example>('SomeCollectionName')

const docRef = example.doc('someDocumentName')
const collectionRef = example.collection()
const collectionGroupRef = example.collectionGroup()
```

## firelordRef(caller)

Not available directly, return of **[getFirelord](../defineYourMetaType/getFirelord)**

```ts
const firelordRef = <MetaType>(collectionPath) => refs
```

| Parameter      | Type                         | Description                                |
| -------------- | ---------------------------- | ------------------------------------------ |
| collectionPath | `MetaType['collectionPath']` | collection path value in MetaType generic. |

## refs(return)

```ts
const refs = {
	doc: documentID => DocumentReference,
	collection: () => CollectionReference,
	collectionGroup: () => Query,
}
```

### refs.doc(caller)

| Return            | Type                                   | Description                   |
| ----------------- | -------------------------------------- | ----------------------------- |
| DocumentReference | `DocumentReference<MetaType['write']>` | FirelordJS document reference |

### refs.collection(caller)

| Return              | Type                                     | Description                     |
| ------------------- | ---------------------------------------- | ------------------------------- |
| CollectionReference | `CollectionReference<MetaType['write']>` | FirelordJS collection reference |

### refs.collectionGroup(caller)

| Return | Type                       | Description      |
| ------ | -------------------------- | ---------------- |
| Query  | `Query<MetaType['write']>` | FirelordJS Query |
