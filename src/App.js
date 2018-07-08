import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ForecastPage from './routes/ForecastPage';
import ForecastListPage from './routes/ForecastListPage';
import ProfileSettingsPage from './routes/ProfileSettingsPage';
import SignInPage from './routes/SignInPage';
import SignUpPage from './routes/SignUpPage';
import SignOutPage from './routes/SignOutPage';
import NoMatch from './routes/NoMatch';
import NavigationBar from './components/NavigationBar';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavigationBar/>

          <Switch>
            <Route exact path="/" component={ForecastListPage}/>
            <Route path="/forecast" component={ForecastPage}/>
            <Route path="/forecast-list" component={ForecastListPage}/>
            <Route path="/settings" component={ProfileSettingsPage}/>
            <Route path="/signin" component={SignInPage}/>
            <Route path="/signup" component={SignUpPage}/>
            <Route path="/signout" component={SignOutPage}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
