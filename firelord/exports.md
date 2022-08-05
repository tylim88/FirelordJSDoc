---
sidebar_position: 2
---

# Library Exports

Firelord wraps and exports every function found in the `firebase-admin\lib\firestore\index.d.ts`.

## Functions 🕊️

These are items that Firelord export directly without wrapping, this is because their input has nothing to do with document data type, those functions are:

- Timestamp
- GeoPoint
- getFirestore
- BulkWriter
- GrpcStatus
- BundleBuilder
- setLogFunction

:::note

Firelord does not exports any type definition from `firebase-admin\lib\firestore\index.d.ts`.

:::

## Type Definitions🦜

Firelord exports its own type definitions:

Field Value:

- ServerTimestamp
- DeleteField
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
