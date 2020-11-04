import React, { useContext } from 'react';

import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from './cart-dropdown.styles';

import {CartContext} from '../../providers/cart/cart.provider';

const CartDropdown = ({ history }) => {
    const {cartItems, toggleHidden} = useContext(CartContext);
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}></CartItem>
                    ))
                ) : (
                        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                    )}
            </CartItemsContainer>
            <CustomButton onClick={() => {
                history.push('/checkout');
                toggleHidden()
            }}> GO TO CHECKOUT</CustomButton>
        </CartDropdownContainer>
    );
}

export default withRouter(CartDropdown);
