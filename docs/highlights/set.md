---
sidebar_position: 2
---

# Set

This page discusses how sets works and its quirks.

We will use `setDoc` in the example, but it works the same for `batch.set` and `transaction.set`.

## Ternary Filter States 🦤

In set operation, both Firestore and FirelordJS forbid you from skipping any member(field), with the exception if merge is set to true or merge field is defined.

If you are using set without merge or merge field, it is recommended to set all members and fill the field we do not need now with **default value** rather than dropping it.

:::caution
Despite `null` being a popular default value, we strongly discourage the usage of null because it [messes up query](https://stackoverflow.com/a/71173190/5338829).
:::

This is because a missing field is not query-able by filter, and this creates 3 filter states:

- document that can be searched by equality operator,
- document that can be searched by inequality operator,
- document that cant be search by either equality or inequality operator.

Needless to say, 2 states easier to deal with than 3 states.

Keep in mind that with merge and merge fields options on, all members become partial, this also creates 3 filter states.

Practically speaking we cannot avoid ternary filter states 100%, because a no SQL database add and remove fields from time to time.

## Stop Unknown Member

Like update, FirelordJS stop unknown member from entering Firestore.

<div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
    <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/firelord/set1.png?raw=true' />
    <small>Firestore</small>
</div>
<br/>
<div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
    <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/firelord/set2.png?raw=true' />
    <small>FirelordJS</small>
</div>
<br/>

<div align='center'>

see **[update](./update#the-firelordjss-way)** for more explanation about this behavior.

</div>

## Merge

A merge set(set with merge : true) can behave like update, all members are partial, except that update can only updates exiting document while set simply create the document if it does not exist.

Merge set also possess the same weakness like update, that is accepting `undefined` value and `undefined` is not a valid firestore data type.

<div  style={{ display:'flex', justifyContent:'space-around' }}>
    <div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/firelord/set3.png?raw=true' />
        <small>Firestore</small>
    </div>
    <div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/firelord/set4.png?raw=true' />
        <small>FirelordJS Partial But No Undefined</small>
    </div>
</div>
<br/>
<div align='center'>

And of course FirelordJS stop the `undefined` value.

</div>

NOTE 1:

From **[update](./update#the-firelordjss-way)**, we know that when dealing with nested form, update behaves like set and replace the whole map.

Now here is the interesting thing, in the case of merge set, it will not replace the whole map, instead it will only set the value you see here, which mean `d` will not be deleted.

:::note

merge set is behaving like proper update than update itself!

Apparently Firestore want us to start questioning our own existence.

:::

## Merge Fields

Merge fields Set behave like merge, except that it updates only the listed member and ignore the rest.

<div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
    <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/firelord/set5.png?raw=true' />
    <small>Firestore does not reject unknown field path</small>
</div>
<br/>
<div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
    <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/firelord/set6.png?raw=true' />
    <small>FirelordJS reject unknown field path</small>
</div>

## Dot Notation Path

You cannot use dot notation for data, both Firestore and FirelordJS will stop you from you doing so.

<div  style={{ display:'flex', justifyContent:'space-around' }}>
    <div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/firelord/set7.png?raw=true' />
        <small>Firestore</small>
    </div>
    <div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/firelord/set8.png?raw=true' />
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

The question is, should FirelordJS alters the behavior of set, so it tallies with the characteristic of update?

FirelordJS trying not to alters the behavior if possible, the reason FirelordJS alters update because of update's implicit data deletion behavior, so it is out of necessity.

But there is no dangerous implicit effect in set operations, so FirestoreJS keep thing as it is now.

Will give this a deeper thought in future.
