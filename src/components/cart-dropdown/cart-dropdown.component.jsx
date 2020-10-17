import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import toggleCartHidden from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component';
//import CartDropdownContainer from './cart-dropdown.container';

import {CartDropdownStyledContainer, CartItemsContainer, EmptyMessageContainer} from './cart-dropdown.styles';

//dispatch is a default parameter when you omitt mapDispatchToProps
const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownStyledContainer>
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
            dispatch(toggleCartHidden())
        }}> GO TO CHECKOUT</CustomButton>
    </CartDropdownStyledContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
//export default CartDropdown;