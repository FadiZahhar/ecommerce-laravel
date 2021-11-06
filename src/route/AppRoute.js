import React, { Component, Fragment } from 'react'
import { Router, Route, Switch } from 'react-router'
import HomePage from '../pages/HomePage'
import ProductDetailsPage from '../pages/ProductDetailsPage';

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact to="/" component={HomePage} />
                    <Route exact path="/productdetails" component={ProductDetailsPage} />
                </Switch>
            </Fragment>
        )
    }
}

export default AppRoute
