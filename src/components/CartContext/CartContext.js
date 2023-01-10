import React, { useState } from 'react';

const CartContext = React.createContext();

const CartProvider = ( { children } ) => {
  
    const [items, setItems] = useState([]);

    const addItem = () => { //  item, quantity 
        console.log("addItem()");
    }

    const deleteItem = ( item ) => {
        console.log("deleteItem()");
    }

    const clearItems = ( ) => {
        console.log("clearItems()");
    }

    return (
        <CartContext.Provider value={{ addItem, deleteItem, clearItems }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };