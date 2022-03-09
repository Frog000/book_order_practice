import React, { useState } from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [cartState, setCartState] = useState({
    // items: [{id: 'book1', name: 'THE OLD MAN AND SEA', price: 15.23, amount: 5}],
    // totalAmount: 76.15
    items: [],
    totalAmount: 0
  });

  const addItemToCartHandler = (item) => {
    //   console.log('addItemToCartHandler called!');
    
    // 1. 기본으로 add할 경우,
    // const updatedItem = [
    //     ...cartState.items,
    //     item
    // ];
    // // console.log(updatedItem);

    // setCartState({items: updatedItem});
    // console.log(cartState);

    // 2. Add를 1개씩 여러번 하면 각각 리스팅되지 않고, 중복된 수량으로 연산되도록 수정.
    // 이미 동일한 id값의 book이 있으면, 해당 book의 amount만 추가하기.
    
    // 방금 cart에 추가한 book(item)이 현재 cart(context)에 존재하는 book들 중에 이미 존재하는 지 확인하기 위해
    // 일치하는 id값 찾기.
    const existingCartItemIndex = cartState.items.findIndex((cartItem) => cartItem.id === item.id);
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex

    // cart에 존재하는 book(item)
    const existingCartItem = cartState.items[existingCartItemIndex];

    let updatedItems;
    if(existingCartItem) { // 방금 cart에 추가한 book이 cart에 이미 존재할 경우,

        const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + item.amount,
        };
        
        updatedItems = [...cartState.items];
        updatedItems[existingCartItemIndex] = updatedItem;
    } else { // 새롭게 추가되는 book일 경우,
        updatedItems = cartState.items.concat(item);
        /**
         *  const array1 = ['a', 'b', 'c'];
            array2 = array1.concat({a:'1'});
            console.log(array2);
         */
    }

    const updatedTotalAmount = cartState.totalAmount + item.price * item.amount;

    setCartState({items: updatedItems, totalAmount: updatedTotalAmount});
  };

  const removeItemToCartHandler = () => {};

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
}

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
