import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'


const Routes = () => (
    <div className={'content-wrapper'}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/billingCycles' component={BillingCycle} />
                <Redirect from="*" to='/' />
            </Switch>
        </BrowserRouter>
    </div>
)

export default Routes