---
sidebar_position: 6
---

# Possibly Read As Undefined❓

This section discusses how `PossiblyReadAsUndefined` works.

## Undefined Read Field 🦜

Firestore has the flexibility to add any field we want, in case like this, the read type of newly added data is `undefined` if we try to read it from the old data.

And this is not the only reason a field could be missing, insecure data integrity is generally main reason why a data is incomplete.

This is what `PossiblyReadAsUndefined` for, it allows you to read a particular field as `undefined`, here is how you use it.

<div  style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/possiblyReadAsUndefined1.png?raw=true' />
        <small>Union 'a' field's read type with 'undefined'</small>
</div>
<br/>

If you are a paranoid, a type safe maniac or simply terrible in securing your data completeness, you can easily union every field read type with one configuration:

<div  style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/possiblyReadAsUndefined2.png?raw=true' />
        <small>Union every field's read type with 'undefined'</small>
</div>
<br/>

:::note

Union all read fields with `undefined` degrade developer experience because you always need to check for `undefined`.

The tradeoff of security is often ease of use.

:::

## Array 🕊️

If you assign `PossiblyReadAsUndefined` to an array type directly, FirelordJS will replace them with error message.

<div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
    <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/possiblyReadAsUndefined3.png?raw=true' />
    <small>directly</small>
</div>

<br/>

Explanation: `PossiblyReadAsUndefined[]` simply doesn't make sense.

However assigning to array indirectly and union with array are legal:

<div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
    <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/possiblyReadAsUndefined4.png?raw=true' />
    <small>directly</small>
</div>
<br/>
<div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
    <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/possiblyReadAsUndefined5.png?raw=true' />
    <small>indirectly</small>
</div>

## Write 🕊️

What happen to `PossiblyReadAsUndefined` type in write operation?

Simple, FirelordJS excludes it.

<div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
    <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/possiblyReadAsUndefined6.png?raw=true' />
    <small>left 'number' </small>
</div>
<br/>
<div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
    <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/possiblyReadAsUndefined7.png?raw=true' />
    <small>nothing left, hence 'never'</small>
</div>
