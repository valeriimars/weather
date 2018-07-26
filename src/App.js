import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import ForecastPage from './routes/ForecastPage';
import ForecastListPage from './routes/ForecastListPage';
import ProfileSettingsPage from './routes/ProfileSettingsPage';
import SignInPage from './routes/SignInPage';
import SignUpPage from './routes/SignUpPage';
import NoMatch from './routes/NoMatch';
import NavigationBar from './components/NavigationBar';
import {signOut} from './utils/authentication';

import styles from './App.css';

class App extends Component {

  state = {
    temperatureUnits: null,
    distanceUnits: null,
  };



  render() {
    return (
      <Router>
        <div>
          <NavigationBar/>
          <div className={styles.container}>
          <Switch>
              <Route exact path="/" component={ForecastPage}/>
              <Route path="/forecast" component={ForecastPage}/>
              <Route path="/forecast-list" component={ForecastListPage}/>
              <Route path="/settings" component={ProfileSettingsPage}/>
              <Route path="/signin" component={SignInPage}/>
              <Route path="/signup" component={SignUpPage}/>
              <Route path="/signout" render={() => {
                signOut();
                return <Redirect to={'/signin'}/>
              }}/>
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
