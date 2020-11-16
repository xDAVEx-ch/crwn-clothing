import StripeCheckoutButton from '../../components/stripe/stripe.component';

import styled from 'styled-components';

export const CheckoutPageStyledContainer = styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;

    @media screen and (max-width: 800px){
        width: 100%;
    }
`;

export const CheckoutHeaderStyledContainer = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockStyledContainer = styled.div`
    text-transform: capitalize;
    width: 23%
    &:last-child {
        width: 8%;
    }
`;

export const TotalStyledContainer = styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
    @media screen and (max-width: 800px){
        font-size: 24px;
    }
`;

export const ButtonStyledContainer = styled(StripeCheckoutButton)`
    margin-left: auto;
    margin-top: 50px;
`;

export const TestWarningStyledContainer = styled.div`
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 20px;
    color: red;
`;