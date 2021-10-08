import React from 'react';
import { Switch, Route } from "react-router-dom";
import { URLS } from './Components/Data/constants';
import BagPage from './Pages/Bag';
import AddressCheckoutPage from './Pages/CheckoutPage/addressCheckout';
import PaymentCheckoutPage from './Pages/CheckoutPage/paymentCheckout';
import HomePage from './Pages/HomePage';
import MenPage from './Pages/MenPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import ProfilePage from './Pages/Profile';

function Routes() {
    return (
        <Switch>
            <Route exact path={URLS.HOMEPAGE} component={HomePage} />
            <Route exact path={URLS.MENPAGE} component={MenPage} />
            <Route exact path={URLS.BAGPAGE} component={BagPage} />
            <Route exact path={URLS.PRODUCTDETAILSPAGE} component={ProductDetailsPage} />
            <Route exact path={URLS.PROFILEPAGE} component={ProfilePage} />
            <Route exact path={URLS.CHECKOUTADDRESSPAGE} component={AddressCheckoutPage} />
            <Route exact path={URLS.CHECKOUTPAYMENTPAGE} component={PaymentCheckoutPage} />
        </Switch>
    )
}

export default Routes
