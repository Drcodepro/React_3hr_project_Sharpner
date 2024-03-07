
import React from "react";
function List(props){

    return (<>
            <h2>{props.children}</h2>
        {props.ProductData.map((product)=>{
            if(product.productCategory===props.name){
            return (<>
             <li key={product.productId}> <b> {product.productName }</b> - {product.productPrice}$</li>
             <button key={product.productId} onClick={()=>{props.deleteProduct(product.productId)}}>Delete Product</button>
            </>)
        }
        return null;
    })}
    </>)
}

export default List;