import React, { useContext } from 'react';

import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from './cart-icon.styles';

import {CartContext} from '../../providers/cart/cart.provider';

const CartIcon = ({ itemCount }) => {
    const { toggleHidden, cartItemsCount } = useContext(CartContext);

    return (
        <CartIconContainer onClick={toggleHidden}>
            <ShoppingIconContainer></ShoppingIconContainer>
            <ItemCountContainer> {cartItemsCount} </ItemCountContainer>
        </CartIconContainer>
    );
};

export default CartIcon;