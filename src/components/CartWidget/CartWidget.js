import React from 'react';
import "./CartWidget.css";
import cart from "../../images/cart.png";

const CartWidget = (props) => {
    return(
        <button type="button" className="CartWidget_Button">
            <img src={cart} className="CartWidget_Image"/>
            <span>{props.items}</span>
        </button>
    )
}

export default CartWidget;