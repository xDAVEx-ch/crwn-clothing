import React from 'react';

import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';


import {
    CheckoutPageStyledContainer,
    CheckoutHeaderStyledContainer,
    HeaderBlockStyledContainer,
    TotalStyledContainer,
    ButtonStyledContainer,
    TestWarningStyledContainer
} from './checkout.styles';

import './checkout.styles.scss';

const Checkout = ({ cartItems, total }) => (
    <CheckoutPageStyledContainer>
        <CheckoutHeaderStyledContainer>

            <HeaderBlockStyledContainer>
                <span>Product</span>
            </HeaderBlockStyledContainer>

            <HeaderBlockStyledContainer>
                <span>Description</span>
            </HeaderBlockStyledContainer>

            <HeaderBlockStyledContainer>
                <span>Quantity</span>
            </HeaderBlockStyledContainer>

            <HeaderBlockStyledContainer>
                <span>Price</span>
            </HeaderBlockStyledContainer>

            <HeaderBlockStyledContainer>
                <span>Remove</span>
            </HeaderBlockStyledContainer>

        </CheckoutHeaderStyledContainer>

        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
        ))}

        <TotalStyledContainer>TOTAL: ${total}</TotalStyledContainer>
        <TestWarningStyledContainer>
            Use the following info to test your credit card payment
            <br/>
            4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
        </TestWarningStyledContainer>
        <ButtonStyledContainer price={total}/>
    </CheckoutPageStyledContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);