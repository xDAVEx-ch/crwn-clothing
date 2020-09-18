import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom'; 

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Homepage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
