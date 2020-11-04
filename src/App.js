import React, { useEffect } from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Checkout from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import CurrentUserContext from './contexts/user/current-user.context';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFomAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

        });
      } else {
        this.setState({currentUser: userAuth});
      }

    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <Header></Header>
        </CurrentUserContext.Provider>
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/checkout' component={Checkout}></Route>
          <Route path='/signin' render={() =>
            this.state.currentUser ?
              (<Redirect to='/' />) :
              (<SignInSignUp></SignInSignUp>)}
          />
        </Switch>
      </div>
    )
  }

}

export default App;
