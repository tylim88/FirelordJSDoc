---
sidebar_position: 0
---

# Type Translation 🪶

This page discuss how FirelordJS translate your type for various use internally.

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

Key Points:

- FirelordJS forbid you from `increment`(field value) `numeric literal` type, for obvious reason.

- FirelordJS does not allow you to write `Date` or `Timestamp` to `ServerTimestamp`, this is to preserve the data integrity because some datetime has to be server timestamp, such as `createdAt` and `updatedAt`. However you can union `ServerTimestamp` with `Date` and `Timestamp` if you want to use `Date` and `Timestamp` for `ServerTimestamp`.
