import React from 'react';
import List from './List';

function ProductList(props){
    return(<>
    <h1>Products--</h1>
    <List  name="Electronics" ProductData={props.ProductData} >Electronic Items</List>
    <List  name="Food" ProductData={props.ProductData} >Food Items</List>
    <List  name="Skin-Care" ProductData={props.ProductData} >Skincare Items</List>
    </>)
}

export default ProductList;