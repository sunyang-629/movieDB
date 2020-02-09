import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import HomePage from './../pages/HomePage'

const Routes = () => {
    return (
        <Fragment>
            <Route exact path="/" component={HomePage} />
            <Route path="/123" component={HomePage} />
        </Fragment>
    )
}

export default Routes