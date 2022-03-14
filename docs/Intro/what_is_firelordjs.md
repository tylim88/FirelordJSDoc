---
sidebar_position: 1
---

# Design Philosophy

<p align="center">
 <a href="https://github.com/tylim88/Firelord/blob/main/img/ozai.png" rel="nofollow"><img src="https://raw.githubusercontent.com/tylim88/Firelord/main/img/ozai.png" width="200px" align="center" /></a>
  <h1 align="center">FirelordJS 烈火君JS</h1>
</p>

<p align="center">
 <a href="https://www.npmjs.com/package/firelordjs" rel="nofollow"><img src="https://img.shields.io/npm/v/firelordjs" alt="Created by tylim88"/></a>&nbsp;
 <a href="https://github.com/tylim88/firelordjs/blob/main/LICENSE" rel="nofollow"><img src="https://img.shields.io/github/license/tylim88/firelordjs" alt="License"/></a>&nbsp;
</p>

<p align="center">
<i>
High Precision Typescript Wrapper for Firestore, Providing Unparalleled Type Safety and Dev Experience
</i></p>

<p align="center">
<i>
Modular, Minuscule, Intuitive, Peaceful, Deep
</i></p>

## The Problems

The Firestore SDK come with type definitions for every module but the definitions is not safe enough to handle complexity of a database.

Firestore SDK also come with terrible runtime behavior.

Few examples:

1. The query clauses (eg: where, orderBy, startAt) has no type safe or what so ever, full YOLO mode. (bad typing)
2. All field values sharing the same type and you can use field value on everything, full YOLO mode. (bad typing)
3. UpdateDoc seem to have nice type definition, it able to generates all the dot notation paths(from top to the deepest) for you. Quite impressive, until you discover:
    - It doesn't stop unknown member. (bad typing)
    - It use Partial, so all the member accept `undefined`, and `undefined` is not a valid Firestore data type. (bad typing)
    - False positive that may result in field deletion if you are not careful. (bad runtime)
4. Limit clause throw on negative and 0 value. Throw on negative is good but throw on 0 value is a bad idea. (bad runtime)

and more...

An unsafe code is a huge technical debt, it creates problem in a dark corner.

You need to revisit it constantly and put more works just to make it safer.

Code made with Firestore SDK is not scalable, not maintainable and fragile.

## Core Principles

FirelordJS is created with one focus in mind: to gain true peace of mind, to code Firestore in a way that is truly type safe and scalable.

Core principles of FirelordJS:

1. Familiarity:
    - The wrapper API must be at least identical to the original Firestore SDK API and can be only simpler onward.
    - The wrapper API runtime behavior must be at least identical to the original API and can be only more intuitive onward.
        - Only alter the run time behavior to be more intuitive if the original API run time behavior has high cognitive cost.
        - Never alter the run time behavior in any way that will alter developer's intention.(unopinionated)
    - Benefits:
        - Greatly reduce the learning cost, developers can simply reuse the knowledge they have learned in the original API.  
        - No surprise behavior in runtime.  
        - If developer decided not to use the wrapper anymore, they can easily fallback to the original API.
        - Low cost to get in, low cost to get out.
2. No type annotation and type cast.
    - Annotate and casting repetitively are annoying, it brings in more code, hurts readability and more point of failure. The solution is bind a type to `something` and infer from that `something`.
    - References(doc, collection, collection group  and query) are the perfect spots to bind types because all operations depend on it, then the operations simply infer the type from the reference.
    - This is also how Firestore SDK type definition works, however it does not fully utilize the potential.
3. Must be able to handle deeply nested data types.
    - Able to handle data type is infinitely deep, until it hits Typescript compiler limitation.
    - We never what kind of data type developer need, so it is best to cater as much use case as possible.
    - This is done with type recursion.
4. Stop run time exceptions.
    - There is 12 known runtime exceptions.
    - Most of the exceptions are limitation that is documented directly or indirectly in Firestore Doc.
    - Prevent the exception in a way that does not alter developer's intention.
    - Do not prevent exception if it alters developer's intention.
    - Do not prevent exception that may indicate logic bug.
5. If possible, instead of validating inputs on run time, do type level prevention.
    - Run time validation is costly:
        - It adds code resulting in slower run time.
        - Need to handle negative case.
    - Type level prevention:
        - Do not need to handle negative case.
        - Cleaner run time.
