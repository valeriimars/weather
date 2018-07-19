import React from 'react';
import styles from './profileSettingsPage.css';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import userImage from './assets/default-user.png'

class ProfilePage extends React.Component {
  state = {
    name: ''
  };

  handleChange = () => {

  };

  render() {
    return (
      <div className={styles.container}>
        <Paper elevation={23} style={{height: '100%'}}>
          <div className={styles.cardLayout + " " + styles.column}>
            <Card>
              <div className={styles.column + " " + styles.header}>
                <h3>User settings</h3>
              </div>
            </Card>
            <div className={styles.content}>
              <img src={userImage} className={styles.userImage}/>
            </div>

            <div className={styles.form}>
              <FormControl>
                <InputLabel htmlFor="first-name">First Name</InputLabel>
                <Input id="first-name"/>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="name-simple">Last Name</InputLabel>
                <Input id="last-name"/>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="home-location">Home Location</InputLabel>
                <Input id="home-location"/>
              </FormControl>

              <FormControl>
                <Button variant="outlined" className={styles.button} variant="contained" color="primary" >
                  Save
                </Button>
              </FormControl>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default ProfilePage;
