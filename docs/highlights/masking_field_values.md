---
sidebar_position: 4
---

# Field Values 🍁

This page discusses how FirelordJS tackles the homogeneous `FieldValue` types.

## Conversion Table 🕊️

There are 5 field values in Firestore:

1. increment
2. serverTimestamp
3. arrayRemove
4. arrayUnion
5. deleteField

And they all sharing the same type: `FieldValue`, which means is it possible to assign increment to serverTimestamp, and this definitely is not a good thing.

FirelordJS solves this by masking the field value, here is how it works:

| Field Value                   | Mask                                             | Note                                                       |
| ----------------------------- | ------------------------------------------------ | ---------------------------------------------------------- |
| `increment`                   | `{ 'Firelord.FieldValue': 'PossiblyUndefined' }` |                                                            |
| `serverTimestamp`             | `{ 'Firelord.FieldValue': 'ServerTimestamp' }`   |                                                            |
| `arrayRemove` \| `arrayUnion` | `{'Firelord.ArrayFieldValue': T }`               | This is generic type where `T` is the element of the array |
| `deleteField`                 | `{ 'Firelord.FieldValue': 'DeleteField' }`       |                                                            |

## UnassignedAble Field Values 🕊️

`arrayRemove`, `arrayUnion` and `increment` are not assignable as type, they only available as output type after type translation, you cannot actively assign them as types and if you do, FirelordJS will replace them with error messages.
