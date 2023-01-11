import React, { useState } from 'react';

const CartContext = React.createContext();

const CartProvider = ( { children } ) => {
  
    const [cart, setCart] = useState([]);

    // Verifica si el producto esta en el cart -> (True/False)
    const isInCart = ( id ) => {
        let isIn = false;
        cart.forEach( item => {
            if( item.Id == id )
            {
                isIn = true;
            }
        });
        //console.log( "isIn: " + isIn );
        return isIn;
    }

    // Obtiene el indice del producto en el cart -> (index)
    const itemIndex = ( id ) => {
        let index = 0;
        cart.forEach( item => {
            if( item.Id == id )
            {
                index = cart.indexOf( item );
            }
        });
        //console.log( "Index: " + index );
        return index;
    }

    // Agrega el producto al cart (no puede haber dos productos iguales)
    const addItem = (id, quantity) => {
        if( isInCart( id ) )
        {
            let index = itemIndex( id );
            let starting_quantity = cart[index].Quantity;
            cart[index].Quantity = starting_quantity + quantity;
        }
        else
        {
            cart.push( {Id: id, Quantity: quantity} );
        }
        setCart( cart );
        console.log( cart );
    }

    // Elimina un producto del cart
    const removeItem = ( id ) => {
        if( isInCart( id ) )
        {
            cart.splice( itemIndex( id ) );
        }
        setCart( cart );
        console.log( cart );
    }

    // Elimina todos los productos del cart
    const clearItems = ( ) => {
        setCart( [] );
    }

    // Obtiene la cantidad total de productos en el cart
    const totalItems = () => {
        let totalItems = 0;
        cart.forEach( item => {
            totalItems += item.Quantity; 
        });
        return totalItems;
    }

    return (
        <CartContext.Provider value={{ addItem, removeItem, clearItems }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartProvider, CartContext };