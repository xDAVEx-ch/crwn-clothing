import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HYAe9INFhSda3O5SAEhzwciUHIr4by2ZO1UQRopG2FsodhouY6jZzyf191OioYNklInuoiIeHWNQ2nPHNOuIEdF00B7m6g7WU';

    const onToken = token =>{
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
        label='Pay now'
        name='CRWN Clothing Ltd'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay now'
        token={onToken}
        stripeKey={publishableKey}
        ></StripeCheckout>
    );
}

export default StripeCheckoutButton;