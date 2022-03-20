---
sidebar_position: 3
---

# Doc Legends 🕊️

## Common

| Legends | Descriptions                                                                                               |
| ------- | ---------------------------------------------------------------------------------------------------------- |
| 🕊️      | Section is purely informative or is taken cared by FirelordJS, sit down and relax, no memorization needed. |
| 🦜      | Section that contains useful advice that can't be enforce with Typescript.                                 |

## On Uninstall

If you decide to uninstalled FirelordJS and revert back the original Firestore SDK, pay attention to the legends below:

| Legends | Descriptions                                                                                                                                                                                                   | Require Attention? | Typescript Warning | Affected Module                                                               |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------ | ----------------------------------------------------------------------------- |
| ⚠️      | Runtime alteration that requires active attention when revert FirelordJS to original Firestore SDK. Such alteration yield no explicit Typescript warning by original Firestore SDK of same function arguments. | active             | no                 | **[update](./highlights/update#circumvent-implicit-data-deletion-%EF%B8%8F)** |
| 🐈      | Alter runtime but does not require any attention when revert back to original Firestore SDK. Does not yield Typescript warning on revert.                                                                      | none               | no                 |
| 🦜      | Alter runtime but does not require active attention when revert back to original Firestore SDK. Yield Typescript warning on revert.                                                                            | passive            | yes                |
| 🌈      | Does not alter runtime but alters the API. Will yield Typescript warning when revert back to original Firestore SDK. Does not require active attention.                                                        | passive            | yes                |

<br/>

**Active Attention**: Warn by nothing, can only rely on developer themselves.

**Passive Attention**: Warn by Typescript, impossible to miss.

Basically you just need to pay extra attention to ⚠️ when removing FirelordJS, the rest will let you know by Typescript.
