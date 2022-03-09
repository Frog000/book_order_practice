import React, { useRef } from 'react'
import Button from '../Commons/Button'
import Input from '../Commons/Input';
import classes from './AddBookForm.module.css'

const AddBookForm = (props) => {
  const inputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(inputRef.current.value);
    const amountValue = inputRef.current.value;
    // console.log(typeof amountValue);

    const amountValueToNumber = +amountValue;
    // console.log(typeof amountValueToNumber);

    props.onAddToCart(amountValueToNumber);
  };

  return (
    <form className={classes.form}>
        <Input ref={inputRef} label='Amount' input={ {id: 'amount', type: 'number', defaultValue: '1'} } />
        <Button type="submit" onClick={submitHandler}>Add</Button>
    </form>
  )
}

export default AddBookForm