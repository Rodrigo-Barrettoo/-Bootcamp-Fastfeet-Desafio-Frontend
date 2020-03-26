import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Delivery from '../pages/Delivery';
import Recipients from '../pages/Recipients';
import Deliverymans from '../pages/Deliverymans';
import Problems from '../pages/Problems';
import RegisterDeliverymans from '../pages/Deliverymans/registerDeliverymans';
import RegisterDelivery from '../pages/Delivery/registerDelivery';
import registerRecipients from '../pages/Recipients/registerRecipients';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/deliveries" exact component={Delivery} isPrivate />
      <Route path="/recipients" exact component={Recipients} isPrivate />
      <Route path="/deliverymans" exact component={Deliverymans} isPrivate />
      <Route path="/problems" component={Problems} isPrivate />

      <Route
        path="/deliverymans/register"
        exact
        component={RegisterDeliverymans}
        isPrivate
      />

      <Route
        path="/deliveries/register"
        exact
        component={RegisterDelivery}
        isPrivate
      />

      <Route
        path="/recipients/register"
        exact
        component={registerRecipients}
        isPrivate
      />
    </Switch>
  );
}
