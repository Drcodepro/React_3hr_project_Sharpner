import InputFild from './InputFild';
import Button from './Button';
import SelectInput from './SelectInput';
import ProductList from './ProductList';
import React,{useState,useEffect} from 'react';


let size = localStorage.length;

    let  productIdst = "";;
    let productPricest ="";
    let productNamest ="";
    let productCategoryst ="Electronics";

function DetailInput(props){

    const [ProductData,setProductData] = useState([]);
    
    useEffect(() => {
        let initialProductData =[]
        for(let i =1;i<=localStorage.length;i++){
            const currData = JSON.parse(localStorage.getItem(i));
            initialProductData.push(currData);
         }
         setProductData(initialProductData);
      }, []);

    
    const changeRef=(name,value)=>{
        if(name==='Id')productIdst=value;
        else if(name==='Price')productPricest =value;
        else productNamest = value;
    }
    const changeCategory=(value)=>{
        productCategoryst=value
    }

    const handlesubmit=(event)=>{
        event.preventDefault();
        const data ={
        productId : productIdst,
        productName : productNamest,
        productPrice : productPricest,
        productCategory:productCategoryst
       }
       size++; 

       const strigData = JSON.stringify(data);

       localStorage.setItem(size,strigData);

       const newData = [...ProductData,data]
       setProductData(newData);
    }
    

return (<>
<form onSubmit={handlesubmit}>
    <InputFild type='text' name="Id" changeRef={changeRef}>Product ID:</InputFild>
    <InputFild type='number' name="Price" changeRef={changeRef}>Selling Price:</InputFild>
    <InputFild type='text'  name="Name" changeRef={changeRef}>Product Name:</InputFild>
    <SelectInput name="Category" changeCategory={changeCategory}/>
    <Button type="submit">Add Product</Button>
</form>
 <ProductList ProductData={ProductData}/>
</>)
}

export default DetailInput;