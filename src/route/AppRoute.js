import React, { Component, Fragment } from 'react'
import { Router, Route, Switch } from "react-router";
//import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
//import PrivacyPage from '../pages/PrivacyPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
//import PurchasePage from '../pages/PurchasePage';
//import RefundPage from '../pages/RefundPage';
//import UserLoginPage from '../pages/UserLoginPage';
import NotificationPage from '../pages/NotificationPage';

class AppRoute extends Component {
     render() {
          return (
     <Fragment>
          <Switch>
               <Route exact path="/" component={HomePage} />

               <Route exact path="/productdetails" component={ProductDetailsPage} />

               <Route exact path="/notification" component={NotificationPage} />
          </Switch>

     </Fragment>
          )
     }
}

export default AppRoute
