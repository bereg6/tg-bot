import React from 'react';
import './input.css';

const Input = (props) => {
    // if(props.type === 'submit'){
    //     return(
    //         <input type={props.type} id={props.id} value={props.value}></input>
    //     )
    // } else{
        return(
            <label>
                {props.name}
                <input type={props.type} placeholder={props.placeholder} id={props.id} value={props.value}></input>
            </label>
    )
    }
// }

export default Input;