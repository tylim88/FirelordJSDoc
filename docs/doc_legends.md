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

Here is a list of topics with 🦜:

1. **[deletable field](./highlights/delete_field.md#deletable-field🦜)**

## On Uninstall

If you miss the PTSD given to you by the original Firestore API and decide to uninstalled FirelordJS, pay attention to the legends below:

| Legends | Descriptions                                                                                                                                                                                                   | Require Attention? |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| ⚠️      | Runtime alteration that requires active attention when revert FirelordJS to original Firestore SDK. Such alteration yield no explicit Typescript warning by original Firestore SDK of same function arguments. | active             |
| 🥭      | Alter runtime but does not require any attention when revert back to original Firestore SDK. Does not yield Typescript warning on revert.                                                                      | none               |
| 🍋      | Alter runtime but does not require active attention when revert back to original Firestore SDK. Yield Typescript warning on revert.                                                                            | passive            |
| 🍐      | Does not alter runtime but alters the API. Will yield Typescript warning when revert back to original Firestore SDK. Does not require active attention.                                                        | passive            |

<br/>

**Active Attention**: nothing warn you, can only rely on yourself.

**Passive Attention**: Typescript warn you.

Basically you just need to pay extra attention to ⚠️ when removing FirelordJS, the rest will let you know by Typescript.

Here is a list of topics with ⚠️:

1. **[update implicit data deletion](./highlights/update#circumvent-implicit-data-deletion-⚠️)**
