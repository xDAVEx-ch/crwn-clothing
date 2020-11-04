import React, {useContext} from 'react';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import CurrentUserContext from "../../contexts/user/current-user.context";

import {CartContext} from '../../providers/cart/cart.provider';

import { auth } from '../../firebase/firebase.utils';

const Header = () => {
    const currentUser = useContext(CurrentUserContext);
    const {hidden} = useContext(CartContext);

    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'></Logo>
            </LogoContainer>

            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {
                    currentUser ?
                        (<OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>)
                        :
                        (<OptionLink to='/signin'>SIGN IN</OptionLink>)
                }
                <CartIcon></CartIcon>
            </OptionsContainer>
            {hidden ? null : <CartDropdown></CartDropdown>}
        </HeaderContainer>
    )
};

export default Header;