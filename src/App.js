import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import ForecastPage from './routes/forecast/Page';
import ForecastListPage from './routes/forecast-list/Page';
import ProfilePage from './routes/profile/Page';
import SettingsPage from './routes/settings/Page';
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
            <Route path="/settings" component={SettingsPage}/>
            <Route path="/profile" component={ProfilePage}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
