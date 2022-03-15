---
sidebar_position: 2
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
High Precision Typescript Wrapper for Firestore Web, Providing Unparalleled Type Safe and Dev Experience
</i></p>

<p align="center">
<i>
Modular, Minuscule, Intuitive, Peaceful, Clean, Deep
</i></p>

## Firestore SDK Complications

The Firestore SDK come with type definitions for every module but they are far from safe enough to handle complexity of a database.

Few examples:

1. The query clauses (eg: where, orderBy, startAt) has no type safe or what so ever, YOLO.
2. All field values sharing the same type and you can use field value on everything, YOLO.
3. UpdateDoc seem to have nice type definition, it able to generates all the dot notation paths(from top to the deepest) for you. Quite impressive, until you discover:
   - It doesn't stop unknown member for non fresh value (value that is attached to a variable).
   - It uses Partial, so all members accept `undefined`, BUT `undefined` is not a valid Firestore data type.

Firestore SDK also comes with quirky runtime behavior that ready to kick your ass in your wet dream:

1. Limit clause throw on negative and 0 value. Throw on negative is good but throw on 0 value is arguable because 0 can be result from correct computation.
2. In some case, update behave partially like set, resulting in field deletion, danger!
3. Let not start with how naughty is `null` in query....

and more...

An unsafe code is a huge technical debt, it creates problem in a dark corner, you need to revisit it constantly and put more works just to make it safer.

Firestore SDK produce code that is not scalable, not maintainable and potentially dangerous.

## Core Principles

FirelordJS is created with one focus in mind: to gain true peace of mind, to code Firestore in a way that is truly type safe and scalable.

Core principles of FirelordJS:

1. Familiarity:
   - The wrapper API must be at least identical to the original Firestore SDK API and can be only simpler onward.
   - The wrapper runtime behavior must be at least identical to the Firestore SDK and can be only more intuitive onward.
   - Benefits:
     - Greatly reduce the learning cost, developers can simply reuse the knowledge they have learned in the original API.
     - No surprise behavior in runtime.
     - If developer decided not to use the wrapper anymore, they can easily fallback to the original API.
     - Low cost to get in, low cost to get out.
2. Type it and forget.
   - The only time developers deal with type is when they define the Meta Types, no type annotation and type cast onward.
   - Annotate and casting repetitively are annoying, it brings in more code, hurts readability and more point of failure. The solution is bind a type to a reference and infer from the reference.
   - References(doc, collection, collection group and query) are the perfect spots to bind types because all operations depend on it, then the operations simply infer the type from the reference.
   - This is also how Firestore SDK type definition works, however it does not fully utilize the potential.
3. Always choose non invasive solution if possible.

   - Never alter the run time behavior in any way that will alter developer's intention.(unopinionated)
   - Only alter the run time behavior to be more intuitive if the original API run time behavior is quirky(high cognitive cost).
   - Prefer type level validation over run time validation for inputs.
     - Run time validation is costly:
       - It adds code resulting in slower run time.
       - Need to handle negative case.
     - Type level validation:
       - Do not need to handle negative case.
       - Cleaner run time.

4. Prevent the preventable.
   - There is not much thing we can do to system and environment run time exceptions but we can do something to inputs exceptions.
   - There is around 15++ commonly known(documented directly or indirectly) inputs exceptions.
   - Prevent the exception in a way that does not alter developer's intention.
   - Do not prevent exception if it alters developer's intention.
   - Do not prevent exception that may indicate logic bug.

## What FirelordJS Is Not?

FirelordJS is not an ODM despite it does remap the data a little bit, but the purpose is to fix the bad design in the Firestore SDK API, not trying to introduce whole new way of doing thing. The current Firestore SDK API is good enough, there is no reason to design a whole new API on top of it, FirelordJS simply put Firestore SDK type safety on turbo mode, which is what it needs now.
