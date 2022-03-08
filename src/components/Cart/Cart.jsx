import React, { useState } from 'react'
import Modal from '../Commons/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import Button from '../Commons/Button'

const BOOKS = [
  {
    id: "book1",
    name: "THE OLD MAN AND THE SEA",
    description:
      "A story of Santiago, an aging Cuban fisherman who struggles with a giant marlin far out in the Gulf Stream off the coast of Cuba",
    author: "Ernest Hemingway",
    price: 10.57,
  },
  {
    id: "book2",
    name: "THE GREAT GATSBY",
    description:
      "Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
    author: "F.Scott Fitzgerald",
    price: 12.97,
  },
];

const Cart = (props) => {

  const [books, setBooks] = useState(BOOKS);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {books.map((book) => (
        <CartItem 
          name={book.name}
          price={book.price}  
        />
      ))}
    </ul>
  );

  const cartItemsTotal = (
    <div className={classes.total}>
      <span>Total Amount</span>
      <span>{55.24}</span>
    </div>
  );

  const modalButton = (
    <div className={classes.buttons}>
      <Button onClick={props.onClose}>Close</Button>
      <Button>Order</Button>
    </div>
  );
  
  const cartModalContent = (
    <>
      {/* 장바구니 목록(cartItems) */}
      {cartItems}
      {/* 장바구니 목록 총 합(cartItemsTotal) */}
      {cartItemsTotal}
      {/* 취소, 주문 버튼(modalButton) */}
      {modalButton}
    </>
  )

  return <Modal onClose={props.onClose}>{cartModalContent}</Modal>;
}

export default Cart