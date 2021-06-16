import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Module1 from './Modulos/Modulo1'
import Module2 from './Modulos/Modulo2'
import Module3 from './Modulos/Modulo3'

function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/" exact>
            <h1>Hello word</h1>
          </Route>
          <Route path="/modulo1">
            <Module1 />
          </Route>
          <Route path="/modulo2">
            <Module2 />
          </Route>
          <Route path="/modulo3">
            <Module3 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
