import React, { useState, useEffect } from 'react';

import { GrFormSubtract as Minus, GrFormAdd as Plus } from 'react-icons/gr';

const itemData = {
    name: 'ארגז לימונערק דודו 750מ"ל ',
    desc: "Ha'arak Dudu Lemon",
    price: 828
}


const CartItem = ({ item }) => {

    const [quantity, setQuantity] = useState(item.qty);


    useEffect(() => {
    }, [item])
    return (
        <>

            <div className="cart-item">
                <div className={`item-img  ${item.imgClass}`}></div>
                <div className="cart-item-desc">
                    <div className="cart-item-heading">{item.name}</div>
                    <div className="cart-item-description">{item.desc}</div>
                    <h2 dir='rtl'>{` ${ item.price * quantity}  ש''ח`}</h2>
                    <div className="cart-item-quantity">
                        <span className="cart-item-btn">
                            <Minus onClick={() => setQuantity(quantity - 1)} />
                        </span>
                        <span className="cart-item-qty">{quantity}</span>
                        <span className="cart-item-btn">
                            <Plus onClick={() => setQuantity(quantity + 1)} />
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default CartItem
