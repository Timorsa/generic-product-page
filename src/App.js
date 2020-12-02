import React, { useState } from 'react';
import Header from './components/Header';
import ShopContainer from './components/ShopContainer';
import Footer from './components/Footer.jsx';
import Modal from './components/Modal';
import Cart from './components/cart';


import './styles/main.scss';


const App = () => {

  const [openCart, setOpenCart] = useState(false);

  return (
    <div className="App">
      {/* <Modal /> */}
      {
        openCart && <Cart setOpenCart={setOpenCart} />
      }
      <Header setOpenCart={setOpenCart} />
      <ShopContainer />
      <Footer />
    </div>
  );
}

export default App;
