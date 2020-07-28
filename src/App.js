import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from '../src/components/views/Dashboard/Dashboard';
import Login from '../src/components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from '../src/components/views/Waiter/Waiter';
import Kitchen from '../src/components/views/Kitchen/Kitchen';
import BookingById from '../src/components/views/Tables/BookingById';
import NewBooking from '../src/components/views/Tables/NewBooking';
import EventsById from '../src/components/views/Tables/EventsById';
import NewEvents from '../src/components/views/Tables/NewEvents';
import OrderById from '../src/components/views/Waiter/OrderById';
import NewOrder from '../src/components/views/Waiter/NewOrder';

function App() {
  return (
    <BrowserRouter >
      <MainLayout>
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
          <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={NewBooking} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={BookingById} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={NewEvents} />
          <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={EventsById} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={NewOrder} />
          <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
          <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={OrderById} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
