import React from 'react'
import ListedItem from './ListedItem';

const lemonarakData = [
    {
        name: 'ערק לימונים דודו 750מ"ל',
        nameEng: 'Lemon Arak Dudu 750ml',
        desc: 'בקבוק לימוערק דודו',
        price: 75,
        imgClass: 'lemonarak-bottle'
    },
    {
        name: 'ערק לימונים דודו 750מ"ל',
        nameEng: 'Lemon Arak Dudu 750ml 12 unit Box',
        desc: "ארגז 12 יח' לימונערק דודו",
        price: 828,
        imgClass: 'lemonarak-box'
    }
]

const Shop = ({ cartItems, setCartItems, setOpenCart }) => {

    const addToCart = (item) => {
        const cartItem = { ...item, qty: 1 };
        setCartItems([...cartItems, cartItem]);
        setOpenCart(true);
    }

    return (
        <div className='shop-cont'>
            <div className="shop-header">
                <h1>רשימת מוצרים</h1>
                <div className="devider"></div>
            </div>
            <div className="shop-body">
                {
                    lemonarakData.map((item, index) => <ListedItem key={index} listItem={item} addToCart={addToCart} />)
                }

            </div>
        </div>
    )
}

export default Shop
