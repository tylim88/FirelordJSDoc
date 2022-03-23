---
sidebar_position: 3
---

# Doc Legends 🕊️

## Common

| Legends | Descriptions                                                                                                    |
| ------- | --------------------------------------------------------------------------------------------------------------- |
| 🕊️      | Section that is purely informative or is taken cared by FirelordJS, sit down and relax, no memorization needed. |
| 🦤       | Section that contains useful advice.                                                                            |
| 🦜      | Section that need to pay attention in order to use it properly.                                                 |

## On Uninstall

If you decide to uninstalled FirelordJS and revert back the original Firestore SDK, pay attention to the legends below:

| Legends | Descriptions                                                                                                                                                                                                   | Require Attention? | Typescript Warning |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------ |
| ⚠️      | Runtime alteration that requires active attention when revert FirelordJS to original Firestore SDK. Such alteration yield no explicit Typescript warning by original Firestore SDK of same function arguments. | active             | no                 |
| 🥭      | Alter runtime but does not require any attention when revert back to original Firestore SDK. Does not yield Typescript warning on revert.                                                                      | none               | no                 |
| 🍋      | Alter runtime but does not require active attention when revert back to original Firestore SDK. Yield Typescript warning on revert.                                                                            | passive            | yes                |
| 🍐      | Does not alter runtime but alters the API. Will yield Typescript warning when revert back to original Firestore SDK. Does not require active attention.                                                        | passive            | yes                |

<br/>

**Active Attention**: nothing warn you, can only rely on yourself.

**Passive Attention**: Typescript warn you.

Basically you just need to pay extra attention to ⚠️ when removing FirelordJS, the rest will let you know by Typescript.

Here is a list of module with ⚠️:

1. **[update implicit data deletion](./highlights/update#circumvent-implicit-data-deletion-%EF%B8%8F)**
