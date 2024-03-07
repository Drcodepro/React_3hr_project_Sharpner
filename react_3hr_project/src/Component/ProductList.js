import React from 'react';
import List from './List';

function ProductList(props){
    const deleteProduct=(deleteId)=>{
        props.deleteProduct(deleteId);
    }
    return(<>
    <h1>Products--</h1>
    <List  name="Electronics" ProductData={props.ProductData} deleteProduct={deleteProduct} >Electronic Items</List>
    <List  name="Food" ProductData={props.ProductData}  deleteProduct={deleteProduct}>Food Items</List>
    <List  name="Skin-Care" ProductData={props.ProductData} deleteProduct={deleteProduct} >Skincare Items</List>
    </>)
}
export default ProductList;