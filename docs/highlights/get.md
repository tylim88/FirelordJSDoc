---
sidebar_position: 3
---

# Get 🌊

This section discuss how get works in general, we will use `get` in the example, but it works the same for`transaction.get`.

The documentSnapshot section also work for `onSnapshot` and `GetDocs`.

## SnapshotOptions

If SnapshotOptions is `{ serverTimestamps: 'none' }`, then all the server timestamp is null if it is not yet resolved when you read it, **[source](https://stackoverflow.com/a/65627037/5338829)**.

<div  style={{ display:'flex', justifyContent:'space-around' }}>
    <div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/get1.png?raw=true' />
        <small>Firestore</small>
    </div>
    <div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/get2.png?raw=true' />
        <small>FirelordJS</small>
    </div>
</div>
<br/>
<div align='center'>

Firelord union the `null` with Timestamp regardless of depth.

</div>
