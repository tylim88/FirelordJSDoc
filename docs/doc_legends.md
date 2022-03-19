---
sidebar_position: 3
---

# Doc Legends

## On Uninstalled

If you decide to uninstalled FirelordJS and revert back the original Firestore SDK, pay attention to the legends below:

| Legends | Descriptions                                                                                                                                                                                                   | Require Attention? | Typescript Warning | Affected Module                                                               |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------ | ----------------------------------------------------------------------------- |
| ⚠️      | Runtime alteration that requires active attention when revert FirelordJS to original Firestore SDK. Such alteration yield no explicit Typescript warning by original Firestore SDK of same function arguments. | active             | no                 | **[update](./highlights/update#circumvent-implicit-data-deletion-%EF%B8%8F)** |
| 🐈      | Alter runtime but does not require any attention when revert back to original Firestore SDK. Does not yield Typescript warning on revert.                                                                      | none               | no                 |
| 🦜      | Alter runtime but does not require active attention when revert back to original Firestore SDK. Yield Typescript warning on revert.                                                                            | passive            | yes                |
| 🌈      | Does not alter runtime but alters the API. Will yield Typescript warning when revert back to original Firestore SDK. Does not require active attention.                                                        | passive            | yes                |

<br/>

Basically you just need to pay extra attention to ⚠️ when removing FirelordJS, the rest will let you know by Typescript.
