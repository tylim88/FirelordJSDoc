---
sidebar_position: 98
---

# Type Conversion 🪶

This page discusses how FirelordJS transforms your types for various uses internally.

Type transformation is needed because for read, write and compare operation require or output different data type.

## Conversion Table 🕊️

| Base                  | Read              | Write                                  | Compare               |
| --------------------- | ----------------- | -------------------------------------- | --------------------- |
| `number`              | `number`          | `number` \| `Increment`                | `number`              |
| `numeric literal`     | `numeric literal` | `numeric literal`                      | `numeric literal`     |
| `string`              | `string`          | `string`                               | `string`              |
| `null`                | `null`            | `null`                                 | `null`                |
| `Date` \| `Timestamp` | `Timestamp`       | `Timestamp` \| `Date`                  | `Timestamp` \| `Date` |
| `ServerTimestamp`     | `Timestamp`       | `ServerTimestamp`                      | `Timestamp` \| `Date` |
| `GeoPoint`            | `GeoPoint`        | `GeoPoint`                             | `GeoPoint`            |
| `object`              | `object`          | `object`                               | `object`              |
| `A[]`                 | `A[]`             | `A[]` \| `ArrayRemove` \| `ArrayUnion` | `A[]`                 |
| `Bytes`               | `Bytes`           | `Bytes`                                | `Bytes`               |

Internally, FirelordJS converts your type into 3 main types for different purpose:

- Read type for getDoc, getDocs and onSnapshot.
- Write type for setDoc and updateDoc.
- Compare type for where and orderBy.

The main types are further transformed for even more specific use cases internally.

Key Points:

- FirelordJS forbids you from increment `numeric literal` type, for obvious reason.

- FirelordJS forbids you from writing `Date` or `Timestamp` into `ServerTimestamp`, because some date time has to be server timestamp, such as `createdAt` and `updatedAt`. However you can overcome this limitation by union `ServerTimestamp` with `Date` and `Timestamp` when you declare the meta type.
