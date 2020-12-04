import React, { useState } from 'react';
import { GrClose as Close } from 'react-icons/gr';

import CartItem from './CartItem'



const Cart = ({ cartItems, setCartItems, setOpenCart }) => {
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

    const cartHeading = () => {
        switch (cartMode) {
            case 'CART':
                return 'סל קניות'
                break;
            case 'ADDRESS':
                return 'כתובת למשלוח'
                break;
            case 'PAYMENT':
                return 'פרטי אמצעי תשלום';
                break;
            case 'CONFERMATION':
                return '';
                break;
            default:
                return '';
        }
    }

    return (
        <div className='cart '>
            <div>
                <div className="close-crt-btn" onClick={() => setOpenCart(false)}>
                    <Close size={20} />
                </div>
                <div className="crt-heading">
                    <h1>{cartHeading()}</h1>
                </div>

                {
                    cartItems.map(item => <CartItem item={item} />)
                }



            </div>
            <div className="proceed-payment-btn">
                המשך לתשלום
            </div>
        </div>
    )
}

export default Cart
