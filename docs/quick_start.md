---
sidebar_position: 1
---

# Quick Start

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

### Installation

```bash
npm i firelordjs firebase
```

Require Typescript 4.5+.

### Define The Meta Type

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

### Initiazlize App And Create References

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

const firelord = getFirelord(getFirestore())

export const example = firelord<Example>('SomeCollectionName')
```

### Basic Usage

```ts title='usage.ts'
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
	query(example.collection(), where('f.h', '>', 1010 as const), orderBy('f.h'))
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
```

### What Is Going On?

Yes, in just one page, you have learned how to use basic operations, equip with **full fledged** type safety.

Everything is safe typed, this including collection ID, document ID, all operations, all field paths, all values, all query clauses, basically whatever FirelordJS exports.

The type of every single value is inferred from the meta types defined in the very beginning.

And this is the only time you deal with the type, **type it and forget**, there is no need for type annotation and type casting, never.

This is done elegantly without complicated configuration while maintain API that is almost identical to the original Firestore API, and simpler.

### Beyond Typing

On top of that FirelordJS prevents **[Firestore Query Limitations](https://firebase.google.com/docs/firestore/query-data/queries#query_limitations)** on type level.

Turn out the so called _Unparalleled Type Safe_ is **not a a bluff**, what a disappointment!
