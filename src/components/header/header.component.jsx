import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector} from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser, hidden }) => (
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
);

const mapStateProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateProps)(Header);