import React, { useEffect } from 'react';
import GlobalStyles from './global.styles';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Checkout from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

const App = ({checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyles />
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
        <Route path='/checkout' component={Checkout}></Route>
        <Route path='/signin' render={() =>
          currentUser ?
            (<Redirect to='/' />) :
            (<SignInSignUp></SignInSignUp>)}
        />
      </Switch>
    </div>
  )

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
