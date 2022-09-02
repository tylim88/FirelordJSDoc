---
sidebar_position: 3
---

# Get

This page discusses how get works in general, we will use `get` in the example, but it works the same for`transaction.get`.

## SnapshotOptions

If `SnapshotOptions` is `{ serverTimestamps: 'none' | 'previous' }`, then all the server timestamp is null if it is not yet resolved when you read it, **[source](https://stackoverflow.com/a/65627037/5338829)**.

:::note

The default value of `SnapshotOptions` is `{ serverTimestamps: 'none' }` but made explicit in all examples in this page.

:::

:::info

Firestore does not have distinct type for server timestamp, all field values in Firestore have the same type, that is `FieldValue`, read **[Inhomogeneous Field Values](./inhomogeneous_field_values.md)** for more info.

:::

<div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
    <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/get1.png?raw=true' />
    <small>Firestore</small>
</div>
<br/>
<div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
    <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/get2.png?raw=true' />
    <small>Firelord union the `null` with `Timestamp` regardless of depth. </small>
</div>

<br/>

If `estimate` is selected:

<div  style={{ display:'flex', justifyContent:'space-around' }}>
    <div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/get3.png?raw=true' />
        <small>FirelordJS will not union null with Timestamp if 'estimate' is selected. </small>
    </div>
</div>
<br/>

## documentSnapshot.get

Firestore chooses to go full YOLO on documentSnapshot.get, it simply does not care.

<div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
    <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/get4.png?raw=true' />
    <small>Firestore does not reject unknown path and return any.</small>
</div>
<br/>
<div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
    <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/get5.png?raw=true' />
    <small>FirelordJS reject unknown path and return accurate type.</small>
</div>
