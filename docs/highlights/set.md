---
sidebar_position: 2
---

# Set 🍒

This page discuss how sets works, we will use `setDoc` in the example, but it works the same for `batch.set` and `transaction.set`.

## Set Operation Requires Complete Members

In set operation, both Firestore and FirelordJS forbid you from skipping any member(field), with exception if set merge is set to true or merge field is defined.

It is recommended to set complete members and fill the field you do not need with default value rather than dropping it.

This is because a missing field is not query-able by filter, and this creates 3 filters states:

- document that can be searched by equality operator,
- document that can be searched by inequality operator,
- document that cant be search by either equality or inequality operator.

It is easier to deal with 2 states than 3 states.

`null` maybe a interesting choice as default value but is not recommended.

## Stop Unknown Member 🕊️

Like update, FirelordJS stop unknown member from entering Firestore.

<div  style={{ display:'flex', justifyContent:'space-around' }}>
    <div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/set1.png?raw=true' />
        <small>Firestore</small>
    </div>
    <div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/set2.png?raw=true' />
        <small>FirelordJS</small>
    </div>
</div>
<br/>
<div align='center'>

see **[update](./update#the-firelordjss-way)** for more explanation.

</div>

## Merge 🕊️

A merge set(set with merge : true) can behave like update, all members are partial, except that update can only updates exiting document while set simply create the document if it does not exist.

Merge set also possess the same weakness like update, that is accepting `undefined` value and `undefined` is not a valid firestore data type.

<div  style={{ display:'flex', justifyContent:'space-around' }}>
    <div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/set3.png?raw=true' />
        <small>Firestore
        
        </small>
    </div>
    <div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/set4.png?raw=true' />
        <small>FirelordJS</small>
    </div>
</div>
<br/>
<div align='center'>

And of course FirelordJS stop the `undefined` value.

</div>

NOTE 1:

From **[update](./update#the-firelordjss-way)**, we know that when dealing with nested form, update behaves like set and replace the whole map.

Now here is the interesting thing, in the case of merge set, it will not replace the whole map, instead it will only set the value you see here, which mean `d` will not be deleted.

A merge set is behaving like update than update itself, another prank API by Firestore!

## Merge Fields 🕊️

Merge fields Set behave like merge, except that it updates only the listed member and ignore the rest.

Firestore does not reject unknown field path:

<div  style={{ display:'flex', justifyContent:'space-around' }}>
    <div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/set5.png?raw=true' />
        <small>Firestore</small>
    </div>
    <div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/set6.png?raw=true' />
        <small>FirelordJS</small>
    </div>
</div>
<br/>

## Dot Notation Path 🕊️

You cannot use dot notation for data, both Firestore and FirelordJS will stop you from you doing so.

<div  style={{ display:'flex', justifyContent:'space-around' }}>
    <div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/set7.png?raw=true' />
        <small>Firestore</small>
    </div>
    <div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/set8.png?raw=true' />
        <small>FirelordJS</small>
    </div>
</div>
<br/>
<div align='center'>

Dot Notation will be treated as unknown member.

</div>

Unlike update, set treats `b.c` as field `b.c` not field `c` of `b`.

If the code runs, this is what you will see in the database:

```ts
{
	a: 1,
	'b.c': 1,
}
```

This is NOT what you will get:

```ts
{
	a: 1,
	b: { c: 1 },
}
```

The question is, should FirelordJS alters the behavior of set, so it tallies with the behavior of update?

FirestoreJS trying not to alters the behavior if possible, the reason FirelordJS alters update because of implicit data deletion effect, alteration is out of necessity.

But there is no dangerous implicit effect in set operations, so FirestoreJS keep thing as it is now.

## About Merge And Merge Fields

Keep in mind that because all members are partial, merge and merge fields introduce 3 filters states, avoid it if possible.
