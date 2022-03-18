---
sidebar_position: 2
---

# Design Philosophy 📖

<div align="center">
		<img src="https://raw.githubusercontent.com/tylim88/Firelord/main/img/ozai.png" width="200px"/>
		<h1>FirelordJS 烈火君JS</h1>
</div>

<div align="center">
		<a href="https://www.npmjs.com/package/firelordjs" rel="nofollow">
			<img src="https://img.shields.io/npm/v/firelordjs" alt="Created by tylim88"/>
		</a>
		&nbsp;
		<a href="https://github.com/tylim88/firelordjs/blob/main/LICENSE" rel="nofollow">
			<img src="https://img.shields.io/github/license/tylim88/firelordjs" alt="License"/>
		</a>
		&nbsp;
		<a href="https://www.npmjs.com/package/firelordjs?activeTab=dependencies" rel="nofollow">
			<img src="https://img.shields.io/badge/dynamic/json?url=https://api.npmutil.com/package/firelordjs&label=dependencies&query=$.dependencies.count" alt="dependency count"/>
		</a>
		&nbsp;
		<img src="https://img.shields.io/badge/minified%2Bgzipped-1KB-brightgreen" alt="package size"/>
		&nbsp;
		<a href="https://github.com/tylim88/Firelordjs/actions" rel="nofollow">
			<img src="https://github.com/tylim88/Firelordjs/actions/workflows/github-actions.yml/badge.svg" alt="github action"/>
		</a>
		&nbsp;
		<a href="https://codecov.io/gh/tylim88/Firelordjs">
			<img src="https://codecov.io/gh/tylim88/Firelordjs/branch/main/graph/badge.svg?token=8DYIREMOGN"/>
		</a>
</div>
<br/>
<div align="center">
		<i>High Precision Typescript Wrapper for Firestore Web, Providing Unparalleled Type Safe and Dev Experience</i>
</div>
<br/>
<div align="center">
		<i>Modular, Minuscule, Intuitive, Peaceful, Craftsmanship, Deep</i>
</div>

## The Root Of Evils

The Firestore SDK come with type definitions for every module but they are far from safe enough to handle complexity of a database.

Few examples:

1. The query clauses (eg: where, orderBy, startAt) has no type safe or what so ever, YOLO.
2. All field values sharing the same type and you can use field value on everything, YOLO.
3. UpdateDoc seem to have nice type definition, it able to generates all the dot notation paths(from top to the deepest) for you. Quite impressive, until you discover:
   - It doesn't stop unknown member of a stale value (value that is attached to a variable).
   - It uses Partial, so all members accept `undefined`, BUT `undefined` is not a valid Firestore data type.

Firestore SDK also comes with quirky runtime behaviors that ready to kick your ass in your wet dream:

1. Limit clause throw on negative and 0 value. Throw on negative is good but throw on 0 value is arguable because 0 can be result from correct computation.
2. In some case, update behave partially like set, resulting in field deletion, danger!
3. Let not start with how naughty `null` is in query....
4. All kinds of widely left open limitations(known but does not bother to do anything about it) for us to explore, adventures, yeah!

and more...

An unsafe code is a huge technical debt, it creates problem in a dark corner, you need to revisit it constantly and put more works just to make it safer.

Firestore SDK produces code that is not scalable, not maintainable and potentially dangerous.

## Core Principles

FirelordJS is created with one focus: to code Firestore in a way that is truly type safe and scalable (a.k.a To Gain True Peace of Mind).

Core principles of FirelordJS:

1. Familiarity (a.k.a knowledge reuse):

   - The wrapper API must be at least identical to the original Firestore SDK API and can only be simpler onward.
   - The wrapper runtime behavior must be at least identical to the original Firestore SDK and can only be more intuitive onward.
   - Benefits:
     - Greatly reduce the learning cost, developers can simply reuse the knowledge they have learned in the original API.
     - No surprise behavior in runtime.
     - If developers decided not to use the wrapper anymore, they can easily fallback to the original API.
     - Low cost to get in, low cost to get out.

2. Type it and forget.
   - The only time developers deal with type is when they define the Meta Types, no type annotation and type cast onward.
   - Annotate and casting repetitively are annoying, it brings in more code, hurts readability and more point of failure. The solution is bind a type to a reference and infer from the reference.
   - References(doc, collection, collection group and query) are the perfect spots to bind types because all operations depend on it, then the operations simply infer the type from the reference.
   - This is also how Firestore SDK type definition works, however it does not fully utilize the potential.
3. Always choose non invasive solution if possible.

   - Never alter the runtime behavior in any way that will alter developers' intention.(unopinionated)
   - Only alter the runtime behavior to be more intuitive if the original API runtime behavior is quirky(high cognitive cost).
   - Prefer type level validation over runtime validation for inputs(code level input, not to be confused with user input validation, although those 2 can overlap).
     - Runtime validation is costly:
       - It adds code resulting in slower runtime.
       - Need to handle negative case.
     - Type level validation:
       - Do not need to handle negative case.
       - Cleaner runtime.

4. Prevent the preventable.

   - There is not much thing we can do to system and environment runtime exceptions but we can do something to inputs exceptions.
   - There is around 20 commonly known(documented directly or indirectly) inputs exceptions.
   - Prevent the exception in a way that does not alter runtime behavior if possible.
   - Prevent the exception in a way that does not alter developers' intention, no matter what.
   - Do not prevent exception that indicates logic bug.

## What FirelordJS Is Not?

### Not An ODM

FirelordJS is not an ODM despite it does remap the data a little bit, but the purpose is to circumvent unreasonable runtime behavior in the Firestore SDK, not trying to introduce whole new way of doing thing. The foundation of current Firestore SDK API is good enough, there is no reason to design a whole new API on top of it, FirelordJS simply put Firestore SDK API type safety on turbo mode, which is what it is lacking of.

### Not A Schema Validator

FirelordJS is not a validator, it is out of the scope of this library. If you need a validator, I recommend **[Zod](https://www.npmjs.com/package/zod)**. Keep in mind that the objective of using validator in front end is user experience, not security.
