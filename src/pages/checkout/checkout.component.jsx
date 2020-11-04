import React, { useContext } from 'react';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe/stripe.component';

import { CartContext } from '../../providers/cart/cart.provider';

import './checkout.styles.scss';

const Checkout = () => {
    const {cartItems, total} = useContext(CartContext);

    return (
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>

            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
            ))}

            <div className="total">TOTAL: ${total}</div>
            <div className='test-warning'>
                Use the following info to test your credit card payment
            <br />
            4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
        </div>
            <StripeCheckoutButton price={total} />
        </div>
    );
}

export default Checkout;