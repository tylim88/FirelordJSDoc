---
sidebar_position: 0
---

# Type Translation 🪶

| Base                             | Read                   | Write                                                         | Compare                          |
| -------------------------------- | ---------------------- | ------------------------------------------------------------- | -------------------------------- |
| `number`                         | `number`               | `number` \| `FirelordJS Increment`                            | `number`                         |
| `numeric literal`                | `numeric literal`      | `numeric literal`                                             | `numeric literal`                |
| `string`                         | `string`               | `string`                                                      | `string`                         |
| `null`                           | `null`                 | `null`                                                        | `null`                           |
| `Date` \| `FirelordJS Timestamp` | `FirelordJS Timestamp` | `FirelordJS Timestamp` \| `Date`                              | `FirelordJS Timestamp` \| `Date` |
| `FirelordJS ServerTimestamp`     | `FirelordJS Timestamp` | `FirelordJS ServerTimestamp`                                  | `FirelordJS Timestamp` \| `Date` |
| `FirelordJS GeoPoint`            | `FirelordJS GeoPoint`  | `FirelordJS GeoPoint`                                         | `FirelordJS GeoPoint`            |
| `object`                         | `object`               | `object`                                                      | `object`                         |
| `A[ ]`                           | `A[ ]`                 | `A[ ]` \| `FirelordJS ArrayRemove` \| `FirelordJS ArrayUnion` | `A[ ]`                           |

Internally this is how FirelordJS translate your type for various use.

NEVER memorize this, use common sense.
