import React from "react";
import useForm from '../hooks/form';
import { FormGroup,InputGroup } from '@blueprintjs/core';

export default function Form(props){
    const { handleChange, handleSubmit } = useForm(props.addItem);

    return(
        <form onSubmit={handleSubmit}>
            <h2>Add To Do Item</h2>
            <FormGroup 
            label="To Do Item"
            labelFor="text-input">
               <InputGroup onChange={handleChange} name="text" type="text" placeholder="Item Details"/>
            </FormGroup>

            <FormGroup 
            label="Assigned To"
            labelFor="text-input">
              <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
            </FormGroup>

            <FormGroup 
            label="Difficulty"
            labelFor="text-input">
              <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
            </FormGroup>
            <button type="submit">Add Item</button>
        </form>
    )
}