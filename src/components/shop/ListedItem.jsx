import React from 'react'

const ListedItem = () => {
    return (
        <div className='shop-item' dir='rtl'>
            <div className="product-image"></div>
            <div className="item-body">
                <div className="name">name</div>
                <div className="desc">description</div>
                <div className="price">45</div>
                <div className="add-btn">הוסף לסל</div>
            </div>

        </div>
    )
}

export default ListedItem
