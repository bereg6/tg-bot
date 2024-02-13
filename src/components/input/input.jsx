import React, {useState} from 'react';
import './input.css';

export default function Input(props) {
    const [value, setValue] = useState('');

    const getValue = (el) => {
       setValue(el.target.value);
    }

    if( props.type ==='submit'){
        return(
                <input type={props.type} placeholder={props.placeholder} id={props.id}></input>
        )
    } else{
        return(
            <div className='input'>
                <label for={props.id}>{props.name}: {value}</label>
                    <input type={props.type} placeholder={props.placeholder} id={props.id} onChange={getValue} ></input>
            </div>
        )
    }
    }