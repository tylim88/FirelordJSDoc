---
sidebar_position: -1
---

# Before You Read 🐤

It is recommended that you be familiar with the original Firestore SDK first, which I believe most people already did.

You don't need to memorize most of thing here, Typescript will do all the hard works for you, think this section as a tour rather than a manual, however please pay attention to topics that are marked with 🦜, 🐧 and ⚠️ legends.

## Exports 🕊️

### Functions 🕊️

FirelordJS wraps and exports every function found in the `@firebase/firestore/dist/index.d.ts`.

However there are functions that FirelordJS export directly without wrapping, this is because their input has nothing to do with document data type, those functions are:

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
