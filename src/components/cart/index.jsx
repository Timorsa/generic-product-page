import React, { useState, useEffect } from 'react';
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
    const [cartMode, setCartMode] = useState('PAYMENT');
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



    return (
        <div className='cart '>
            <div>
                <div className="close-crt-btn" onClick={() => setOpenCart(false)}>
                    <Close size={20} />
                </div>
                <div className="crt-heading">
                    <h1>{cartHeading(cartMode)}</h1>
                </div>

                { false &&
                    cartItems.map(item => <CartItem key={item.desc} item={item} />)
                }

               { false && <AdressForm address={address} setAddress={setAddress}/> }


                <CreditCardForm/>




            </div>
            <div className="proceed-payment-btn">
                המשך לתשלום
            </div>
        </div>
    )
}

export default Cart
