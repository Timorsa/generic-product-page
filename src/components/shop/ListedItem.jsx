import React from 'react'



const ListedItem = ({ listItem }) => {

    const { name, nameEng, desc, price, imgClass } = listItem;

    return (

        <div className='shop-item' dir='rtl'>
            <div className={`product-image ${imgClass}`}></div>
            <div className="item-body">
                <div>
                    <div className="name">{name}</div>
                    <div className="name-eng">{nameEng}</div>
                    <div className="desc">{desc}</div>
                    <div className="price">{price}</div>
                </div>
                <div className="add-btn">הוסף לסל</div>
            </div>

        </div>
    )
}

export default ListedItem
