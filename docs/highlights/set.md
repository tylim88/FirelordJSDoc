# Set 🏔️

This section discuss how sets works, we will use `setDoc` in the example, but it works the same for `batch.set` and `transaction.set`.

## Set Operation Require Full Member

In set operation, both Firestore and FirelordJS forbid you from skipping any member(field), with exception if set merge is set to true or merge field is defined.

It is recommended set full member and fill the field you do not need with default value rather than dropping it.

This is because a missing field is not query-able by filter, and this creates 3 document states:

- document that can be searched by equality operator,
- document that can be searched by inequality operator,
- document that cant be search by neither equality or inequality operator.

It is easier to deal with 2 states than 3 states.

`null` maybe a interesting choice as default value but is not recommend.

## Stop Unknown Member

Like update, FirelordJS stop unknown member from entering Firestore.

<div  style={{ display:'flex', justifyContent:'space-between' }}>
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

## Merge And Merge Field

A merge set(set with merge or merge field) can behave like update, all members are partial, except that update can only updates exiting document while set simply create the document if it does not exist.

Merge set also possess the same weakness like update, that is accepting `undefined` value and `undefined` is not a valid firestore data type.

<div  style={{ display:'flex', justifyContent:'space-between' }}>
    <div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/set3.png?raw=true' />
        <small>Firestore</small>
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

Do you remember how update deals with nested form?

Well, it behave like set and replace the whole map.

Now here is the interesting thing, in the case of merge set, it will not replace the whole object, instead it will only set the value you see here, which mean `d` will not be deleted.

A merge set is behaving like update than update itself, another prank API by Firestore!
