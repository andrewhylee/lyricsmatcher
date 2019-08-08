import React from 'react';
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Index from './components/layout/Index'

import Provider from './context'

function App() {
  return (
    <Provider>
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Switch>

              <Route exact path="/" component={Index} />

            </Switch>
          </div>
        </>
      </Router>
    </Provider>
  );
}

export default App;
