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
import FavouritePage from '../pages/FavouritePage';
import UserLoginPage from '../pages/UserLoginPage';
import ContactPage from '../pages/ContactPage';
import Purchase from '../components/others/Purchase';
import { PurchasePage } from '../pages/PurchasePage';
import PrivacyPage from '../pages/PrivacyPage';
import Refund from '../components/others/Refund';
import RefundPage from '../pages/RefundPage';

class AppRoute extends Component {
     render() {
          return (
     <Fragment>
          <Switch>
               <Route exact path="/" component={HomePage} />

               <Route exact path="/productdetails" component={ProductDetailsPage} />

               <Route exact path="/notification" component={NotificationPage} />

               <Route exact path="/favourite" component={FavouritePage} />
          
               <Route exact path="/login" component={UserLoginPage} />

               <Route exact path="/contact" component={ContactPage} />

               <Route exact path="/purchase" component={PurchasePage} />

               <Route exact path="/privacy" component={PrivacyPage} />

               <Route exact path="/refund" component={RefundPage} />
          </Switch>

     </Fragment>
          )
     }
}

export default AppRoute
