import React, { useState } from 'react'
import Header from './components/Layout/Header'
import Main from './components/Layout/Main'
import Books from './components/Books/Books'
import Cart from './components/Cart/Cart'

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  
  const openCartHandler = () => {
    setCartIsShown(true);
  };

  const closeCartHandler = () => {
    console.log('gg');
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={closeCartHandler}/>}
      <Header onOpen={openCartHandler}/>
      <Main>
        <Books />
      </Main>
    </>
  )
}

export default App