---
sidebar_position: 2
---

# Firestore SDK Complications

## The Types

The Firestore SDK come with type definitions for every module but the definitions is not safe enough to handle complexity of a database.

Few examples:

1. The query clauses (eg: where, orderBy, startAt) has no type safe or what so ever, full YOLO mode.
2. All field values sharing the same type and you can use field value on everything, full YOLO mode.
3. UpdateDoc seem to have nice type definition, it able to generates all the dot notation paths(from top to the deepest) for you. Quite impressive, until you discover:
   - It doesn't stop unknown member for non fresh value (value that is attached to a variable).
   - It uses Partial, so all members accept `undefined`, BUT `undefined` is not a valid Firestore data type.
   - False positive that may result in field deletion if you are not careful.

Firestore SDK also come with quirky runtime behavior.

1. Limit clause throw on negative and 0 value. Throw on negative is good but throw on 0 value is a bad idea.

and more...

An unsafe code is a huge technical debt, it creates problem in a dark corner.

You need to revisit it constantly and put more works just to make it safer.

Code made with Firestore SDK is not scalable, not maintainable and fragile.
