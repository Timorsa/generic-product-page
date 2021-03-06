import React, { useState } from 'react';

import Shop from './components/shop';
import Cart from './components/cart';
import Header from './components/header';
import Footer from './components/footer';
import ShopOverlay from './components/ShopOverlay'

import './styles/main.scss';


// ! add overlay

const App = () => {

  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
   // enum : CART , ADDRESS, PAYMENT, CONFORMATION
   const [cartMode, setCartMode] = useState('CART');

  return (
    <div className="App">
    <ShopOverlay/>
      {
        true && <Cart cartItems={cartItems} setCartItems={setCartItems} setOpenCart={setOpenCart}  cartMode={cartMode} setCartMode={setCartMode}/>
      }
      <Header setOpenCart={setOpenCart} />
      <Shop cartItems={cartItems} setCartItems={setCartItems} setOpenCart={setOpenCart} setCartMode={setCartMode} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
