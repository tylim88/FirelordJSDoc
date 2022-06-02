---
sidebar_position: 0
---

# Type Transformation 🪶

This page discusses how FirelordJS transforms your types for various uses internally.

## Conversion Table 🕊️

| Base                             | Read                   | Write                                                        | Compare                          |
| -------------------------------- | ---------------------- | ------------------------------------------------------------ | -------------------------------- |
| `number`                         | `number`               | `number` \| `FirelordJS Increment`                           | `number`                         |
| `numeric literal`                | `numeric literal`      | `numeric literal`                                            | `numeric literal`                |
| `string`                         | `string`               | `string`                                                     | `string`                         |
| `null`                           | `null`                 | `null`                                                       | `null`                           |
| `Date` \| `FirelordJS Timestamp` | `FirelordJS Timestamp` | `FirelordJS Timestamp` \| `Date`                             | `FirelordJS Timestamp` \| `Date` |
| `FirelordJS ServerTimestamp`     | `FirelordJS Timestamp` | `FirelordJS ServerTimestamp`                                 | `FirelordJS Timestamp` \| `Date` |
| `FirelordJS GeoPoint`            | `FirelordJS GeoPoint`  | `FirelordJS GeoPoint`                                        | `FirelordJS GeoPoint`            |
| `object`                         | `object`               | `object`                                                     | `object`                         |
| `A[]`                            | `A[]`                  | `A[]` \| `FirelordJS ArrayRemove` \| `FirelordJS ArrayUnion` | `A[]`                            |
| `Bytes`                          | `Bytes`                | `Bytes`                                                      | `Bytes`                          |

Internally, FirelordJS converts your type into 3 main types for different purpose:

- Read type for getDoc, getDocs and onSnapshot.
- Write type for setDoc and updateDoc.
- Compare type for where and orderBy.

The main types are further transformed for even more specific use cases internally.

Key Points:

- FirelordJS forbids you from increment `numeric literal` type, for obvious reason.

- FirelordJS forbids you from writing `Date` or `Timestamp` into `ServerTimestamp`, because some date time has to be server timestamp, such as `createdAt` and `updatedAt`. However you can overcome this limitation by union `ServerTimestamp` with `Date` and `Timestamp` when you declare the meta type.
