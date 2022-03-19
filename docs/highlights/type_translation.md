---
sidebar_position: 0
---

# Type Translation 🪶

| Base                                    | Read                   | Write                                                                                              | Compare                          |
| --------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------- |
| number                                  | number                 | number \| FirelordJS Increment                                                                     | number                           |
| string                                  | string                 | string                                                                                             | string                           |
| null                                    | null                   | null                                                                                               | null                             |
| Date                                    | FirelordJS Timestamp   | FirelordJS Timestamp \|Date                                                                        | FirelordJS Timestamp \|Date      |
| FirelordJS Timestamp                    | FirelordJS Timestamp   | FirelordJS Timestamp \|Date                                                                        | FirelordJS Timestamp \|Date      |
| MetaTypeCreator.ServerTimestamp\*\*\*   | FirelordJS Timestamp   | FirebaseFirestore.FieldValue(ServerTimestamp\*)                                                    | FirelordJS Timestamp \|Date      |
| Firestore.GeoPoint                      | Firestore.GeoPoint     | Firestore.GeoPoint                                                                                 | Firestore.GeoPoint               |
| object\*\*                              | object                 | object                                                                                             | object                           |
| number[]                                | number[]               | number[] \|FirebaseFirestore.FieldValue(arrayRemove/arrayUnion\*)                                  | number[]                         |
| string[]                                | string[]               | string[] \|FirebaseFirestore.FieldValue(arrayRemove/arrayUnion\*)                                  | string[]                         |
| null[]                                  | null[]                 | null[] \|FirebaseFirestore.FieldValue(arrayRemove/arrayUnion\*)                                    | null[]                           |
| undefined[]                             | undefined[]            | undefined[] \|FirebaseFirestore.FieldValue(arrayRemove/arrayUnion\*)                               | undefined[]                      |
| Date[]                                  | FirelordJS Timestamp[] | (FirelordJS Timestamp \|Date )[] \|FirebaseFirestore.FieldValue(arrayRemove/arrayUnion\*)          | (Date \| FirelordJS Timestamp)[] |
| FirelordJS Timestamp[]                  | FirelordJS Timestamp[] | (FirelordJS Timestamp \|Date )[] \|FirebaseFirestore.FieldValue(arrayRemove/arrayUnion\*)          | (Date \| FirelordJS Timestamp)[] |
| MetaTypeCreator.ServerTimestamp[]\*\*\* | never[]                | never[]                                                                                            | never[]                          |
| Firestore.GeoPoint[]                    | Firestore.GeoPoint[]   | Firestore.GeoPoint[]                                                                               | Firestore.GeoPoint[]             |
| object[]\*\*                            | object[]               | object[]                                                                                           | object[]                         |
| n-dimension array                       | n-dimension array      | n-dimension array \| FirebaseFirestore.FieldValue(arrayRemove/arrayUnion\*) only supported for 1st |
