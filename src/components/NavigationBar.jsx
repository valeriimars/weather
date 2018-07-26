import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import MenuItems from './MenuItems';
import SearchInput from './SearchInput';


const styles = {
  icons: {
    fontSize: '32px',
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  textField: {
    width: '100%',
  },
};

class NavigationBar extends React.Component {

  static propTypes = {
    onSearchSubmit: PropTypes.func,
  };

  state = {
    isMenuOpen: false,
  };

  toggleMenu = () => {
    this.setState({isMenuOpen: !this.state.isMenuOpen});
  };

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={this.toggleMenu}>
              <MenuIcon style={styles.icons}/>
            </IconButton>
            <SearchInput
              onSubmit={this.props.onSearchSubmit}
              styles={styles}/>
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
              <MenuItems styles={styles}/>
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
