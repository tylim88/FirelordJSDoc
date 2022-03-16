---
sidebar_position: 1
---

# Quick Start ⛷️

<div align="center">
		<img src="https://raw.githubusercontent.com/tylim88/Firelord/main/img/ozai.png" width="200px"/>
		<h1>FirelordJS 烈火君JS</h1>
</div>

<div align="center">
		<a href="https://www.npmjs.com/package/firelordjs" rel="nofollow"><img src="https://img.shields.io/npm/v/firelordjs" alt="Created by tylim88"/></a>
		&nbsp;
		<a href="https://github.com/tylim88/firelordjs/blob/main/LICENSE" rel="nofollow"><img src="https://img.shields.io/github/license/tylim88/firelordjs" alt="License"/></a>
</div>
<br/>
<div align="center">
		<i>High Precision Typescript Wrapper for Firestore Web, Providing Unparalleled Type Safe and Dev Experience</i>
</div>
<br/>
<div align="center">
		<i>Modular, Minuscule, Intuitive, Peaceful, Craftsmanship, Deep</i>
</div>
<br/>
<div align="center">
		<i>Of The VOUFT, For The VOUFT, By The VOUFT*</i>
</div>
<br/>

\*Victims Of Unsafe Firestore Type

## Do Not Install

Documentation under development, will only release the npm package after the documentation is done!

## Installation

```bash title='require typescript 4.5+ and of course firebase'
npm i firelordjs
```

The library looks big(200KB-300KB) due to all kind of type declarations, but the runtime code is merely 1KB after minified and zipped.

## Define The Meta Type

```ts title='dataType.ts'
import { Firelord, ServerTimestampFieldValue } from 'firelordjs'

export type Example = Firelord<
	{
		a: number
		b: { c: boolean; d: { e: string }[] }
		f: { g: ServerTimestampFieldValue; h: 1010 | 2929 | 3838 }
	}, // can go with even more crazy looking data type, but not good for a quick tutorial
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

await setDoc(example.doc('abc'), {
	a: 100,
	b: { c: true, d: [{ e: 'abc' }] },
	f: { g: serverTimestamp(), h: 1010 },
})

await addDoc(example.collection(), {
	a: 900,
	b: { c: false, d: [{ e: 'hi' }] },
	f: { g: serverTimestamp(), h: 3838 },
})

await updateDoc(example.doc('abc'), {
	a: increment(1),
	'b.d': arrayUnion({ e: 'hello' }), // dot notation form
	f: { h: 2929 }, // nested form
})

await deleteDoc(example.doc('abc'))

await getDoc(example.doc('abc'))

await getDocs(
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
```

## Batch

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

## Transaction

```ts title='transaction.ts'
import { example, db } from './init'
import {
	runTransaction,
	serverTimestamp,
	increment,
	arrayRemove,
} from 'firelordjs'

try {
	await runTransaction(db, async transaction => {
		await transaction.get(example.doc('lmn'))

		transaction.set(example.doc('lmn'), {
			a: 88,
			b: { c: false, d: [{ e: 'opq' }] },
			f: { g: serverTimestamp(), h: 2929 },
		})

		transaction.update(example.doc('lmn'), {
			a: increment(1),
			b: { d: arrayRemove({ e: 'rst' }) }, // nested form
			'f.g': serverTimestamp(), // dot notation form
		})

		transaction.delete(example.doc('lmn'))
	})
	console.log('Transaction successfully committed!')
} catch (e) {
	console.log('Transaction failed: ', e)
}
```

## Did I Just Learned Everything?

Long answer: Almost, short answer: Yes.

FirelordJS API looks and feels nearly identical to the original Firestore SDK API, to the point that in just one page, you have learned almost everything, equipped with **full fledged** type safety, effortlessly.

Every value is safely typed, this including collection ID, document ID, all operations, all field paths, all values, all query clauses, basically whatever FirelordJS exports.

FirelordJS infer types of every single value from the MetaType defined in the very beginning, and this is the only time you ever have to deal with the type, there is no need for type annotation and type casting, **type it and forget**.

This is done elegantly without complicated configuration while maintain API that is nearly identical to the original Firestore API, and simpler.

## Beyond Typing

FirelordJS does not stop at just safe guarding your data type in all operations, it goes beyond that and further prevents **[Firestore Query Limitations](https://firebase.google.com/docs/firestore/query-data/queries#query_limitations)** and **[Firestore Pagination Limitation](https://firebase.google.com/docs/firestore/query-data/order-limit-data?hl=en&authuser=0#limitations)** on type level(non invasive), **FirelordJS is the End Game of pursuing Firestore's type safety**.

Turn out the so called _<span style={{color:'red'}}>Unparalleled Type Safe and Dev Experience</span>_ is not a a bluff at all, what a disappointment!
