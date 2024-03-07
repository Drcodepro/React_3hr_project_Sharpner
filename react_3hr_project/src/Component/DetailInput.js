import React from 'react';
import InputFild from './InputFild';
import Button from './Button';
import SelectInput from './SelectInput';

function DetailInput(props){
return (<>

<form>
<InputFild type='number'>Product ID:</InputFild>
<InputFild type='number'>Selling Price:</InputFild>
<InputFild type='text'>Product Name:</InputFild>
<SelectInput/>
<Button type="submit">Add Product</Button>
</form>
</>)
}

export default DetailInput;