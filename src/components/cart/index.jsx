import React, { useState } from 'react';
import { GrClose as Close } from 'react-icons/gr';

import CartItem from './CartItem'



const Cart = ({ setOpenCart }) => {
    // enum : CART , ADDRESS, PAYMENT, CONFORMATION
    const [cartMode, setCartMode] = useState('CART');
    const [address, setAddress] = useState({
        name: '',
        city: '',
        address: '',
        houseNumber: '0',
        zipCode: '',
        email: '',
        phone: ''
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

                <CartItem />

            </div>
            <div className="proceed-payment-btn">
                המשך לתשלום
            </div>
        </div>
    )
}

export default Cart
