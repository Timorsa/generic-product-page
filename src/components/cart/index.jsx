import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { GrClose as Close } from 'react-icons/gr';

import CartItem from './CartItem';
import AdressForm from './AdressForm';
import CreditCardForm from './CreditCardForm'

const cartHeading = (cartMode) => {
    switch (cartMode) {
        case 'CART':
            return 'סל קניות'
        case 'ADDRESS':
            return 'כתובת למשלוח'
        case 'PAYMENT':
            return 'פרטי אמצעי תשלום';
        case 'CONFERMATION':
            return '';
        default:
            return '';
    }
}


const Cart = ({ cartItems, setCartItems, setOpenCart }) => {
    // enum : CART , ADDRESS, PAYMENT, CONFORMATION
    const [cartMode, setCartMode] = useState('ADDRESS');
    const [address, setAddress] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        address: '',
        zipCode: '',
        houseNumber: '',
        secondPhone: '',
        apartmentNumber: '',
    });
    const [paymentDetails, setPaymentDetails] = useState({
        ownerName: '',
        ownerId: '',
        cardNumber: '',
        expireDate: {
            mm: '',
            yy: ''
        },
        cvv: ''
    });

    const closeCart = () => {
        gsap.to('.cart', 1, {
            right:'-100%',
            ease: 'Expo.easeInOut',
        })
           gsap.to('.cart', 0.2, {
            delay: 2,
            // opacity: 0,
            display: 'none'
        })
    }


    return (
        <div className='cart '>
            <div>
                <div className="close-crt-btn" onClick={() => closeCart()}>
                    <Close size={20} />
                </div>
                <div className="crt-heading">
                    <h1>{cartHeading(cartMode)}</h1>
                </div>

                { false &&
                    cartItems.map(item => <CartItem key={item.desc} item={item} />)
                }

               { true && <AdressForm address={address} setAddress={setAddress}/> }


               {false &&  <CreditCardForm/> }




            </div>
            <div className="proceed-payment-btn">
                המשך לתשלום
            </div>
        </div>
    )
}

export default Cart
