import React from 'react'
import { GrPrevious as Prev, GrCart as Cart } from 'react-icons/gr'


const Header = ({ setOpenCart }) => {
    return (
        <div className="header">
            <div className="btn-icn btn-back">
                <Prev size={15} />
            </div>
            <div className="st-hd-logo"></div>
            <div className="btn-icn btn-crt" onClick={() => setOpenCart(true)}>
                <Cart size={22} />
            </div>
        </div>
    )
}

export default Header
