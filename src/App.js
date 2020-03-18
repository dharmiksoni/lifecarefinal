import React, { Fragment } from 'react';
import Dashboard from './containers/dashboard';
import { Switch, Route, Redirect } from 'react-router-dom';
import Contact from './containers/contact';
import Services from './containers/services';

function App() {
  const locationName = localStorage.getItem('selectedLocation').toLowerCase();

  return (
    <div>
      <Switch>
        <Route exact path={`/`} component={Dashboard} />
        <Route path='/contact' component={Contact} />
        <Route path='/services' component={Services} />
        <Route exact path={`/:location`} component={Dashboard} />
        <Route exact path={`/:location/contact`} component={Contact}/>
        <Route exact path={`/:location/services`} component={Services}/>
      </Switch>
    </div>
  );
}

export default App;
