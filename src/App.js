import React, { useState } from 'react';

import Shop from './components/shop';
import Cart from './components/cart';
import Header from './components/header';
import Footer from './components/footer';

import './styles/main.scss';


// ! add overlay

const App = () => {

  const [openCart, setOpenCart] = useState(false);

  return (
    <div className="App">
      {/* <Modal /> */}
      {
        openCart && <Cart setOpenCart={setOpenCart} />
      }
      <Header setOpenCart={setOpenCart} />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
