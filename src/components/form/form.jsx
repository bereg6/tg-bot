import React from "react";
import './form.css';
import Input from '../input/input.jsx';

const Form = (props) => {
    return(
        <form id={props.id}>
            <Input type="text" placeholder='Game name' id='gameName' name='Game name' />
            <Input type="number" placeholder='Price' id='price' name='Price' />
        </form>
    )
}

export default Form;