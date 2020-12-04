import React, { useState } from 'react';

import Shop from './components/shop';
import Cart from './components/cart';
import Header from './components/header';
import Footer from './components/footer';

import './styles/main.scss';


// ! add overlay

const App = () => {

  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      {/* <Modal /> */}
      {
        openCart && <Cart cartItems={cartItems} setCartItems={setCartItems} setOpenCart={setOpenCart} />
      }
      <Header setOpenCart={setOpenCart} />
      <Shop cartItems={cartItems} setCartItems={setCartItems} setOpenCart={setOpenCart} />
      <Footer />
    </div>
  );
}

export default App;
