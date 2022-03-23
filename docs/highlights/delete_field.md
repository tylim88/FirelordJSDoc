---
sidebar_position: 5
---

# Delete Field 🍄

This section discusses how deleteField works.

## Deletable 🦜

Firestore allow you to use deleteField anytime you want, but inn FirelordJS, field are not deletable by default, you need to assign `deleteField` type in order to use it.

<div  style={{ display:'flex', flexDirection:"column", alignItems:'center' }}>
        <img src='https://github.com/tylim88/FirelordJSDoc/blob/main/static/img/deleteField1.png?raw=true' />
        <small>You can delete 'a' because one of the 'a' types is 'deleteField' </small>
</div>
