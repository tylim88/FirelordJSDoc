---
sidebar_position: -1
---

# About 🐤

The highlight section explains what is wrong with the original Firestore APIs and how FirelordJS solves them.

You don't need to memorize stuff, however please pay attention to topics that are marked with 🦜, 🐧 and ⚠️ legends.

## Exports 🕊️

FirelordJS wraps and exports every function found in the `@firebase/firestore/dist/index.d.ts`.

### Functions 🕊️

These are functions that FirelordJS export directly without wrapping, this is because their input has nothing to do with document data type, those functions are:

- loadBundle
- clearIndexedDbPersistence
- connectFirestoreEmulator
- disableNetwork
- enableIndexedDbPersistence
- enableMultiTabIndexedDbPersistence
- enableNetwork
- onSnapshotsInSync
- namedQuery

:::note

Firelord does not exports any type definition from `@firebase/firestore/dist/index.d.ts`.

:::

### Type Definitions🦜

Firestore exports its own type definitions:

Field Value:

- ServerTimestamp
- DeleteField,
- PossiblyReadAsUndefined

References:

- DocumentReference
- CollectionReference
- Query
- FirelordRef

Snapshot:

- DocumentSnapshot
- QuerySnapshot
- QueryDocumentSnapshot

Data Type:

- MetaType
- MetaTypeCreator
