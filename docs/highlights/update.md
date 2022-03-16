---
sidebar_position: 1
---

# Update 🍃

This section discuss general how updates works, we use `updateDoc` in all the example, but it works the same for `batch.update` and `transaction.update`.

<div align='center'>
🕊 FirelordJS alters the behavior of Firestore SDK update to become more intuitive.
</div>

## The Dangerous Firestore SDK Update API

There are 2 type issues and 1 critical runtime issue in the original Firestore SDK update API

1. Accept unknown member from stale value, stale value refer to value that is attached to a variable.

2. Accept `undefined` but `undefined` is not a valid Firestore value.

<div align='center'><img src='../../static/img/update1.png'/></div>
