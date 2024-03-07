import React from 'react';

function SelectInput(props){
    const handleChange=(e)=>{
        props.changeCategory(e.target.value);
    }
    return (<>
    <select name ={props.name} onChange={handleChange}>
        <option value="Electronics">Electronics</option>
        <option value="Food">Food</option>
        <option value="Skin-Care">Skin-Care</option>
    </select>
    </>)
}
export default SelectInput;