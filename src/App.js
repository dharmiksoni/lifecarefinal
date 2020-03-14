import React from 'react';
import Dashboard from './containers/dashboard';
import { Switch, Route } from "react-router-dom";
import Contact from './containers/contact';
import Services from './containers/services';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/contact" component={Contact} />
        <Route path="/services" component={Services} />
      </Switch>
    </div>
  );
}

export default App;
