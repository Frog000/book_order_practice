import React from 'react'
import classes from './Book.module.css'
import AddBookForm from './AddBookForm'

const Book = (props) => {
  return (
    <li className={classes.book}>
      <div className={classes.book__info}>
        <h3>{props.name} - <span className={classes.author}>{props.author}</span></h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <AddBookForm />
    </li>
  )
}

export default Book