import React from 'react'
import ListedItem from './ListedItem';

const Shop = () => {
    return (
        <div className='shop-cont'>
            <div className="shop-header">
                <h1>רשימת מוצרים</h1>
                <div className="devider"></div>
            </div>
            <div className="shop-body">
                <ListedItem />
                <ListedItem />
            </div>
        </div>
    )
}

export default Shop
