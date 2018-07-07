import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';


import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom'


const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class NavigationBar extends React.Component {
  state = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
  };

  menuItems() {
    return (
      <div className={styles.fullList}>
        <List>

          <ListItem button>
            <ListItemIcon>
              <StarIcon/>
            </ListItemIcon>
            <NavLink to="/forecast" >
              <ListItemText primary="Forecast"/>
            </NavLink>

          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Link to="/forecast-list">Forecast List</Link>
            </ListItemIcon>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Link to="/settings">Settings</Link>
            </ListItemIcon>
          </ListItem>

          <ListItem button>
            <ListItemIcon>
              <Link to="/profile">Profile</Link>
            </ListItemIcon>
          </ListItem>

          <Divider/>

          <ListItem button>
            <ListItemIcon>
              <Link to="/logout">Logout</Link>
            </ListItemIcon>
          </ListItem>

        </List>
      </div>
    );
  }

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleMenu}>
              <MenuIcon/>
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Title
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.isMenuOpen} onClose={this.toggleMenu}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleMenu}
            onKeyDown={this.toggleMenu}
          >
            <div className={classes.list}>
              {this.menuItems()}
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

NavigationBar.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(NavigationBar);
