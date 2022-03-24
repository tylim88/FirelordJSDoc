---
sidebar_position: 5
---

# Delete Field 🍄

This section discusses how `deleteField` works.

## Deletable Field 🦜

Firestore allow you to use `deleteField` anytime you want, but in FirelordJS, field are not deletable by default, you need to assign `deleteField` type in order to use it.

<div  style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/deleteField1.png?raw=true' />
        <small>Only 'a' is deletable</small>
</div>
<br/>

You can delete 'a' field because one of the 'a' field types is 'deleteField'.

<div  style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/deleteField2.png?raw=true' />
        <small>Union 'a' field's read type with 'undefined'</small>
</div>
<br/>

This mechanism is needed because we need to tell FirelordJS if a field is deletable, then its read type is possibly `undefined` and the `DeleteField` union `undefined` to the field's read type.

## Array 🕊️

If you assign `deleteField` to array type directly or indirectly, FirelordJS will replace them with error message.

<div  style={{ display:'flex', justifyContent:'space-around' }}>
    <div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/deleteField3.png?raw=true' />
        <small>directly</small>
    </div>
    <div style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/deleteField4.png?raw=true' />
        <small>indirectly</small>
    </div>
</div>
<br/>
