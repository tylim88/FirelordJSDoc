---
sidebar_position: 1
---

# Quick Start

<!-- <p align="center">
 <a href="https://github.com/tylim88/Firelord/blob/main/img/ozai.png" rel="nofollow"><img src="https://raw.githubusercontent.com/tylim88/Firelord/main/img/ozai.png" width="200px" align="center" /></a>
  <h1 align="center">FirelordJS 烈火君JS</h1>
</p> -->

<p align="center">
 <a href="https://www.npmjs.com/package/firelordjs" rel="nofollow"><img src="https://img.shields.io/npm/v/firelordjs" alt="Created by tylim88"/></a>
 &nbsp;
 <a href="https://github.com/tylim88/firelordjs/blob/main/LICENSE" rel="nofollow"><img src="https://img.shields.io/github/license/tylim88/firelordjs" alt="License"/></a>&nbsp;
</p>

<!-- <p align="center">
<i>
High Precision Typescript Wrapper for Firestore Web, Providing Unparalleled Type Safe and Dev Experience
</i></p>

<p align="center">
<i>
Modular, Minuscule, Intuitive, Peaceful, Craftsmanship, Deep
</i></p> -->

<!-- ## Do Not Install

Documentation under development, will only release the npm package after the documentation is done!

## Installation

```bash title='require typescript 4.5+'
npm i firelordjs firebase && npm i -D typescript@^4.5
```

## Define The Meta Type

```ts title='dataType.ts'
import { Firelord, ServerTimestampFieldValue } from 'firelordjs'

export type Example = Firelord<
	{
		a: number
		b: { c: boolean; d: { e: string }[] }
		f: { g: ServerTimestampFieldValue; h: 1010 | 2929 | 3838 }
	},
	'SomeCollectionName',
	string // document ID type, normally string
>
```

## Create Firelord References

```ts title='init.ts'
import { getFirelord } from 'firelordjs'
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { Example } from './dataType'

initializeApp({
	apiKey: '### FIREBASE API KEY ###',
	authDomain: '### FIREBASE AUTH DOMAIN ###',
	projectId: '### CLOUD FIRESTORE PROJECT ID ###',
})

export const db = getFirestore()

const firelordRef = getFirelord(db)

export const example = firelordRef<Example>('SomeCollectionName')
```

## Operations

```ts title='operations.ts'
import { example } from './init'
import {
	getDoc,
	getDocs,
	setDoc,
	updateDoc,
	deleteDoc,
	addDoc,
	query,
	serverTimestamp,
	increment,
	arrayUnion,
	where,
	orderBy,
	onSnapshot,
	startAfter,
} from 'firelordjs'

setDoc(example.doc('abc'), {
	a: 100,
	b: { c: true, d: [{ e: 'abc' }] },
	f: { g: serverTimestamp(), h: 1010 },
})

addDoc(example.collection(), {
	a: 900,
	b: { c: false, d: [{ e: 'hi' }] },
	f: { g: serverTimestamp(), h: 3838 },
})

updateDoc(example.doc('abc'), {
	a: increment(1),
	'b.d': arrayUnion({ e: 'hello' }), // dot notation form
	f: { h: 2929 }, // nested form
})

getDoc(example.doc('abc'))

getDocs(
	query(
		example.collection(),
		where('f.h', '>', 1010 as const),
		orderBy('f.h'),
		limit(10)
	)
)

onSnapshot(
	query(
		example.collection(),
		where('b.d', 'array-contains', { e: 'hello' }),
		orderBy('f.g'),
		startAfter(new Date())
	),
	querySnapshot => {
		// onNext
	}
)

deleteDoc(example.doc('abc'))
``` -->

<!-- ## Batch

```ts title='batch.ts'
import { example, db } from './init'
import { writeBatch, serverTimestamp } from 'firelordjs'

const batch = writeBatch(db)

batch.set(example.doc('hij'), {
	a: 6,
	b: { c: false, d: [{ e: 'xyz' }] },
	f: { g: serverTimestamp(), h: 1010 },
})

batch.update(example.doc('hij'), {
	a: 6,
	b: { c: false }, // nested form
	'f.g': serverTimestamp(), // dot notation form
})

batch.delete(example.doc('hij'))

await batch.commit()
```

## Did I Just Finished Everything?

Almost.

In just one page, you have learned almost everything, equip with **full fledged** type safety, effortless.

Every value is safely typed, this including collection ID, document ID, all operations, all field paths, all values, all query clauses, basically whatever FirelordJS exports.

The type of every single value is inferred from the meta types defined in the very beginning.

And this is the only time you deal with the type, **type it and forget**, there is no need for type annotation and type casting, never.

This is done elegantly without complicated configuration while maintain API that is nearly identical to the original Firestore API, and simpler.

## Beyond Typing

FirelordJS does not stop at just safe guarding your data type in all operations(this alone already surpass conventional wrappers by a huge margin), it goes beyond that and further prevents **[Firestore Query Limitations](https://firebase.google.com/docs/firestore/query-data/queries#query_limitations)** on type level, none of the other wrappers able to offer this.

Nothing come close to FirelordJS, and I doubt anything will, **FirelordJS is the end game in pursuing Firestore type safety**.

Turn out the so called **_<span style={{color:'red'}}>Unparalleled Type Safe and Dev Experience</span>_** is not a a bluff at all, what a disappointment! -->
