---
sidebar_position: 1
---

# Update 🍃

This section discuss how updates works, we will use `updateDoc` in the example, but it works the same for `batch.update` and `transaction.update`.

<div align='center'>
🌈 FirelordJS alters the behavior of Firestore SDK <strong>update</strong> to become more intuitive.
</div>

## Dangerous Firestore SDK Update API

There are 2 type issues and 1 critical runtime issue in the original Firestore SDK update API

1. Accept unknown member from stale value, stale value refer to value that is attached to a variable.

2. Accept `undefined` but `undefined` is not a valid Firestore value.

<div align='center'><img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/update1.png?raw=true' /></div>
<div align='center'><small>Figure Showing Unsafe Firestore Update Type</small></div>
<br/>

3. And guess what will happens to the code below:

<div align='center'><img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/update2.png?raw=true' /></div>
<div align='center'><small>Do You Know What Will Happen After The Code Run?</small></div>
<br/>

The value of `a`, `c` and `e` will be updated, meanwhile `d` will be deleted.

Yup you see that right, `d` is deleted, in an **update** operation, this is terrible because you need extra knowledge in order to be aware of such behavior, in short, it is not intuitive.

Data deletion should be done in an explicit way, by assigning a `delete` field value in that field. Then by looking at the code, you clearly know it going to delete the field without the need to look into the Firestore documentation.

This is definitely a failed API design by Firestore, in term of usability.

## The FirelordJS's Way

FirelordJS solves all the stated concerns:

<div align='center'><img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/update3.png?raw=true' /></div>
<div align='center'><small>FirelordJS Able to Detect Unknown Member In The Stale Value</small></div>
<br/>

Note 1: FirelordJS detect the unknown member and print out the unknown member in Typescript error message.

Note 2: FirelordJS lose precision when dealing with fresh value, instead of highlight only `d`, it highlight everything. However it will still displays the same error message just like it did to the stale value. Currently there is no way to overcome this because it is impossible to determine whether a value is stale or fresh on type level, a small price to pay for salvation.

🌈 For the 3rd case, it is only solve-able in runtime. While Firestore not able to handle nested form correctly, but it has no problem with dot notation form, so FirelordJS simply flatten down the data before pass it to Firestore update and that eliminates the problem. What you see will always be what you expect in the database.
