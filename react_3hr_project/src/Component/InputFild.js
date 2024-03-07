import React from 'react';

function InputFild(props){
    const handleChange=(e)=>{
        props.changeRef(e.target.name,e.target.value);
    }

    return (<>
    <label >{props.children}</label>
    <input type={props.type} name ={props.name} onChange={handleChange}/>
    </>)
}

export default InputFild;