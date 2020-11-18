import React, { useEffect, lazy, Suspense } from 'react';
import GlobalStyles from './global.styles';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundaries/error-boundarie';

import { checkUserSession } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

const Homepage = lazy(() => import('./pages/homepage/homepage.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInSignUp = lazy(() => import('./pages/sign-in-sign-up/sign-in-sign-up.component'));
const Checkout = lazy(() => import('./pages/checkout/checkout.component'));

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyles />
      <Header></Header>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={Homepage}></Route>
            <Route path='/shop' component={ShopPage}></Route>
            <Route path='/checkout' component={Checkout}></Route>
            <Route path='/signin' render={() =>
              currentUser ?
                (<Redirect to='/' />) :
                (<SignInSignUp></SignInSignUp>)}
            />
          </Suspense>
        </ErrorBoundary>
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
