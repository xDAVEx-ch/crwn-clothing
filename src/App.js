import React from 'react';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFomAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user =>{
      this.setState({ currentUser: user});
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/signin' component={SignInSignUp}></Route>
        </Switch>
      </div>
    )
  }

}

export default App;
