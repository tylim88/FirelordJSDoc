---
sidebar_position: 2
---

# Library Exports

Firelord wraps and exports every function found in the `firebase-admin\lib\firestore\index.d.ts`.

## Functions

These are items that Firelord export directly without wrapping:

- Timestamp
- GeoPoint
- getFirestore
- BulkWriter
- GrpcStatus
- BundleBuilder
- setLogFunction

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
