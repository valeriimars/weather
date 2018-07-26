import React from 'react';
import styles from './profileSettingsPage.css';

import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import userImage from './assets/default-user.png';
import {getUserDatabaseById} from '../utils/db';
import {auth, storage} from '../utils/firebase';
import _ from 'lodash';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});


class ProfilePage extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    homeLocation: '',
    workLocation: '',
    imageUrl: userImage,
    error: null,
    user: null,
    temperatureUnits: '',
    distanceUnits: '',
  };

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        getUserDatabaseById(user.uid)
          .once('value')
          .then((dataSnapshot) => {
            const firstName = dataSnapshot.child('firstName').val();
            const lastName = dataSnapshot.child('lastName').val();
            const homeLocation = dataSnapshot.child('homeLocation').val();
            const imageUrl = dataSnapshot.child('imageUrl').val();
            const workLocation = dataSnapshot.child('workLocation').val();

            const temperatureUnits = dataSnapshot.child('temperatureUnits').val();
            const distanceUnits = dataSnapshot.child('distanceUnits').val();

            this.setState({
              user,
              firstName,
              lastName,
              homeLocation,
              imageUrl,
              workLocation,
              temperatureUnits,
              distanceUnits,
            });
          });
      } else {
        // No user is signed in.
      }
    });
  }

  onSubmit = (event) => {
    if (!this.state.firstName || !this.state.lastName) {
      this.setState({error: {message: 'First Name and Last Name cannot be empty'}});
      return;
    }
    this.setState({error: null});
    event.preventDefault();

    const {
      firstName,
      lastName,
      homeLocation,
      imageUrl,
      workLocation,
      temperatureUnits,
      distanceUnits,
    } = this.state;

    getUserDatabaseById(this.state.user.uid)
      .set({
        firstName,
        lastName,
        homeLocation,
        imageUrl,
        workLocation,
        temperatureUnits,
        distanceUnits,
      });
  };

  onFileUpload = (event) => {
    console.log(event.target.files[0]);
    const file = event.target.files[0];
    if (!file) {
      return null;
    }
    const storageRef = storage.ref(`${this.state.user.uid}/${file.name}`);
    storageRef
      .put(file)
      .then((snapshot) => {
        snapshot.ref
          .getDownloadURL()
          .then((url) => {
            this.setState({imageUrl: url});
            getUserDatabaseById(this.state.user.uid).set({imageUrl: url});
          })
      });
  };

  handleSwitchChange = name => event => {
    if (name === 'F') {
      this.setState({temperatureUnits: event.target.checked ? 'F' : 'C' });
    }
    if (name === 'Feet') {
      this.setState({distanceUnits: event.target.checked ? 'Feet' : 'Meters'})
    }
  };

  render() {
    if (!this.state.user) {
      return (
        <div className={styles.container}>
          <Paper elevation={23} style={{height: '100%'}}>
            <h2 style={{paddingTop: '50px', textAlign: 'center'}}>Please Log In to see your profile</h2>
          </Paper>
        </div>
      );
    }

    const {error} = this.state;
    console.log(this.state)
    return (
      <div className={styles.container}>
        <Paper elevation={23} style={{height: '100%'}}>
          <div className={styles.cardLayout + " " + styles.column}>
            <Card>
              <div className={styles.column + " " + styles.header}>
                <h3>Profile settings</h3>
              </div>
            </Card>
            <div className={styles.content + " " + styles.imageContainer}>
              <img src={this.state.imageUrl} className={styles.userImage}/>
              <input
                className={styles.inputfile}
                type="file"
                style={{cursor: 'pointer'}}
                onChange={this.onFileUpload}
                id="file"
              />
              <label htmlFor="file">Change Profile Image</label>
            </div>

            <div className={styles.row}>
              <div className={styles.form}>
                <FormControl>
                  <InputLabel htmlFor="first-name">First Name</InputLabel>
                  <Input
                    value={this.state.firstName}
                    id="first-name"
                    onChange={event => this.setState(byPropKey('firstName', event.target.value))}
                  />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="last-name">Last Name</InputLabel>
                  <Input
                    id="last-name"
                    value={this.state.lastName}
                    onChange={event => this.setState(byPropKey('lastName', event.target.value))}
                  />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor="home-location">Home Location</InputLabel>
                  <Input
                    id="home-location"
                    value={this.state.homeLocation}
                    onChange={event => this.setState(byPropKey('homeLocation', event.target.value))}
                  />
                </FormControl>

                <FormControl>
                  <InputLabel htmlFor="home-location">Work Location</InputLabel>
                  <Input
                    id="work-location"
                    value={this.state.workLocation}
                    onChange={event => this.setState(byPropKey('workLocation', event.target.value))}
                  />
                </FormControl>
                <FormControl>
                  <div style={{color: 'red', fontSize: '.3em'}}>
                    {error && <p>{error.message}</p>}
                  </div>
                </FormControl>
                <FormControl>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.onSubmit}
                  >
                    Save
                  </Button>
                </FormControl>
              </div>
              <div className={styles.otherConfigs}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={this.state.temperatureUnits === 'F'}
                      value="F"
                      color="primary"
                      onChange={this.handleSwitchChange('F')}
                    />
                  }
                  label="Temperature in Fahrenheits&deg; "
                />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={this.state.distanceUnits === 'Feet'}
                        value="Feet"
                        color="primary"
                        onChange={this.handleSwitchChange('Feet')}
                      />
                    }
                    label="Distance in Feet"
                  />
                <FormControlLabel
                  control={
                    <Switch
                      checked={false}
                      value="commute-suggestions"
                      color="primary"
                      disabled
                    />
                  }
                  label="Commute suggestions"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={false}
                      value="x"
                      color="primary"
                      disabled
                    />
                  }
                  label="Use GPS data"
                />
              </div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default ProfilePage;
