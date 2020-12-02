import React, { useState, useEffect } from 'react';

import { GrFormSubtract as Minus, GrFormAdd as Plus } from 'react-icons/gr';

const itemData = {
    name: 'ארגז לימונערק דודו 750מ"ל ',
    desc: "Ha'arak Dudu Lemon",
    price: 828
}


const CartItem = () => {

    const [quantity, setQuantity] = useState(1);

    return (
        <>
            <div className="crt-heading">
                <h1>סל קניות</h1>
            </div>
            <div className="cart-item">
                <div className="item-img"></div>
                <div className="cart-item-desc">
                    <div className="cart-item-heading">{itemData.name}</div>
                    <div className="cart-item-description">{itemData.desc}</div>
                    <h2 dir='rtl'>{`ש''ח ${'שח' + itemData.price * quantity} `}</h2>
                    <div className="cart-item-quantity">
                        <Minus onClick={() => setQuantity(quantity - 1)} />
                        <span className="cart-item-qty">{quantity}</span>
                        <Plus onClick={() => setQuantity(quantity + 1)} />
                    </div>
                </div>

            </div>
        </>
    )
}

export default CartItem
