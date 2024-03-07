import React from 'react';

function InputFild(props){
    return (<>
    <label>{props.children}</label>
    <input type={props.type}/>
    </>)
}

export default InputFild;