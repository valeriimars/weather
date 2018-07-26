import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import _ from 'lodash';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import SettingsIcon from '@material-ui/icons/Settings';
import ListIcon from '@material-ui/icons/List';
import ExitIcon from '@material-ui/icons/ExitToApp';
import {auth} from "../utils/firebase";
import {getUserDatabaseById} from "../utils/db";


class MenuItems extends React.Component {

  state = {
    user: {},
    firstName: '',
    lastName: '',
  };

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        getUserDatabaseById(user.uid)
          .once('value')
          .then((dataSnapshot) => {
            const firstName = dataSnapshot.child('firstName').val();
            const lastName = dataSnapshot.child('lastName').val();
            this.setState({
              user,
              firstName,
              lastName,
            });
          });
      } else {
        // No user is signed in.
      }
    });
  }

  items() {
    if (_.isEmpty(this.state.user)) {
      return (
        <div>
          <ListItem button>
            <Link to="/signin">
              <ListItemText primary="Sign In"/>
            </Link>
          </ListItem>

          <ListItem button>
            <Link to="/signup">
              <ListItemText primary="Sign Up"/>
            </Link>
          </ListItem>
        </div>
      );
    }
    return (
      <Fragment>
        <ListItem>
          Hello!
        </ListItem>
        <ListItem>
          <Link to="/settings">
            <strong>{this.state.firstName} {this.state.lastName}</strong>
          </Link>
        </ListItem>
      </Fragment>
    );
  }

  render() {
    return (
      <div className={this.props.styles.fullList}>
        <List>

          <ListItem button>
            <ListItemIcon>
              <StarIcon/>
            </ListItemIcon>
            <Link to="/forecast">
              <ListItemText primary="Forecast"/>
            </Link>

          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <ListIcon/>
            </ListItemIcon>
            <Link to="/forecast-list">
              <ListItemText primary="Forecast List"/>
            </Link>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <SettingsIcon/>
            </ListItemIcon>
            <Link to="/settings">
              <ListItemText primary="Profile Settings"/>
            </Link>
          </ListItem>

          <Divider/>
          {this.items()}
          <Divider/>

          <ListItem button>
            <ListItemIcon>
              <ExitIcon/>
            </ListItemIcon>
            <Link to="/signout">
              <ListItemText primary="Sign Out"/>
            </Link>
          </ListItem>

        </List>
      </div>
    );
  }
};

MenuItems.propTypes = {
  styles: PropTypes.object,
};
export default MenuItems;
