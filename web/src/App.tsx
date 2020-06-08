import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import SignInScreen from './SignIn';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signin">
            <SignInScreen />
          </Route>
        </Switch>
      </div>
    </Router>
    );
}

export default App;
