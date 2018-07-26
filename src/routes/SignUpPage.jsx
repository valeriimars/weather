import React from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import {createUserWithEmailAndPassword} from '../utils/authentication';
import {createDBRecordForUser} from '../utils/db';
import styles from './SignInPage.css';
import {withRouter} from 'react-router-dom';


const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};


class SignUpPage extends React.Component {
  state = {...INITIAL_STATE};

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    createUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        createDBRecordForUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState({...INITIAL_STATE});
            history.push('/settings');
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  };

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <div className={styles.container}>
        <Paper elevation={23} style={{height: '100%'}}>
          <div className={styles.cardLayout + " " + styles.column}>
            <div className={styles.header}>
              <h3>Sign Up</h3>
            </div>
            <div className={styles.form}>
              <FormControl>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="email"
                  onChange={event => this.setState(byPropKey('email', event.target.value))}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  type="password"
                  id="password"
                  onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="repeat-password">Repeat Password</InputLabel>
                <Input
                  id="repeat-password"
                  type="password"
                  onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                />
              </FormControl>
              <FormControl>
                <div style={{color: 'red', fontSize: '.3em'}}>
                  {error && <p>{error.message}</p>}
                </div>
              </FormControl>
              <FormControl>
                <Button
                  className={styles.button}
                  variant="contained"
                  color="primary"
                  onClick={this.onSubmit}
                >
                  Sign Up
                </Button>
              </FormControl>

            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withRouter(SignUpPage);
