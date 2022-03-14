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
High Precision Typescript Wrapper for Firestore Web, Providing Unparalleled Type Safety and Dev Experience
</i></p>

<p align="center">
<i>
Modular, Minuscule, Intuitive, Peaceful, Clean, Deep
</i></p>

## Where Is The Intro?

Straight to the point first, then we talk.

## Installation

```bash
npm i firelordjs firebase
```

Require Typescript 4.5+.

### Define The Meta Type

```ts title='dataType.ts'
import { Firelord, getFirelord, ServerTimestampFieldValue } from 'firelordjs'
import { getFirestore } from 'firebase/firestore'

type Example = Firelord<
	{
		a: number
		b: { c: boolean; d: { e: string }[] }
		f: { g: ServerTimestampFieldValue; h: 1010 | 2929 | 3838 }
	},
	'SomeCollectionName',
	string // document ID type, normally string
>

const firelord = getFirelord(getFirestore())

export const example = firelord<Example>('SomeCollectionName')
```

Make sure you **[initialize Firebase App](https://firebase.google.com/docs/firestore/quickstart)** before this piece of code run.

### Basic Usage

```ts title='usage.ts'
import { example } from './dataType'
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
	// you can skip any member, be it in dot notation form or nested form
	a: increment(1),
	'b.c': true, // dot notation form
	'b.d': arrayUnion({ e: 'hello' }),
	f: { h: 2929 }, // nested form, read <Why Firestore SDK Typing is Inherently Unsafe and Dangerous>
})

getDoc(example.doc('abc'))

getDocs(
	query(
		example.collection(),
		where(
			'f.h',
			'>',
			1010 as const // numeric literal type need const assertion
		),
		orderBy('f.h') // Read <How Firelord Safe Guard You against Firestore Limitations On Type Level>
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
		// do something
	}
)

deleteDoc(example.doc('abc'))
```

### What Is Going On?

Everything is safe typed, this including collection ID, document ID, all operations, all field paths, all values, query clauses, basically all FirelordJS exports.

The type of every single value is inferred from the meta types defined in the very beginning, there is no need of type annotation and type casting.

And this is the only time you deal with the type, **type it and forget**.

This is done elegantly without complicated configuration while maintain api that is almost identical to the original Firestore API, and simpler.

On top of that FirelordJS handle **[Firestore Query Limitations](https://firebase.google.com/docs/firestore/query-data/queries)** on type level, preventing runtime errors without altering runtime behavior and developer's intention.
