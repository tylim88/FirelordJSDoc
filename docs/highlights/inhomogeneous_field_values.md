---
sidebar_position: 4
---

# Inhomogeneous Field Values 🦋

This page discusses how FirelordJS tackles the homogeneous `FieldValue` types.

## Conversion Table 🕊️

There are 5 field values in Firestore:

1. increment
2. serverTimestamp
3. arrayRemove
4. arrayUnion
5. deleteField

And they all sharing the same type: `FieldValue`, which means is it possible to assign any field value to any field value, and this is obviously a big in the ass.

FirelordJS solves this by assigning [unique symbol type](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#unique-symbol):

| Field Value                   | Interface                                                                 | Note                                                       |
| ----------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------------------- |
| `increment`                   | `{ 'Firelord.FieldValue': unique symbol }`                                |                                                            |
| `serverTimestamp`             | `{ 'Firelord.FieldValue': unique symbol }`                                |                                                            |
| `arrayRemove` \| `arrayUnion` | `{ 'Firelord.FieldValue': unique symbol, 'Firelord.ArrayFieldValue': T }` | This is generic type where `T` is the element of the array |
| `deleteField`                 | `{ 'Firelord.FieldValue': unique symbol }`                                |                                                            |

Do note that they are concrete type, they are not existed just for being only as type, it is possible to access `Firelord.FieldValue` and `Firelord.ArrayFieldValue` value in run time.

## UnassignAble Field Values 🕊️

`arrayRemove`, `arrayUnion` and `increment` are not assignable as type, they only available as output type after type translation, you cannot actively assign them as types and if you do, FirelordJS will replaces them with error messages.
