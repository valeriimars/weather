import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import SettingsIcon from '@material-ui/icons/Settings';
import ListIcon from '@material-ui/icons/List';
import ExitIcon from '@material-ui/icons/ExitToApp';


const MenuItems = (props) => {
  return (
    <div className={props.styles.fullList}>
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
};

MenuItems.propTypes = {
  styles: PropTypes.object,
};
export default MenuItems;
