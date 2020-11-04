import React, { createContext, useState, useEffect } from 'react';

import { addItemToCart, removeItemToCart, filterItemFromCart, getCartItemsCount, getTotalPay } from './cart.utils';

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => { },
    cartItems: [],
    addItem: () => { },
    removeItem: () => { },
    clearItemFromCart: () => { },
    cartItemsCount: 0
});

const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);

    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const removeItem = item => setCartItems(removeItemToCart(cartItems, item));
    const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item));
    const toggleHidden = () => setHidden(!hidden);
    const total = getTotalPay(cartItems);

    useEffect(() =>{
        setCartItemsCount(getCartItemsCount(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                hidden,
                toggleHidden,
                cartItems,
                addItem,
                removeItem,
                clearItemFromCart,
                cartItemsCount,
                total
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;