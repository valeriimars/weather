import React from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';
import {signInWithEmailAndPassword} from '../utils/authentication';
import styles from './SignInPage.css'

const byPropName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInPage extends React.Component {

  state = {...INITIAL_STATE};

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({...INITIAL_STATE}));
        history.push('/settings');
        console.log('Successfully Signed In');
      })
      .catch(error => {
        this.setState(byPropName('error', error));
      });

    event.preventDefault();
  };

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <div className={styles.container}>
        <Paper elevation={23} style={{height: '100%'}}>
          <div className={styles.cardLayout + " " + styles.column}>
            <div className={styles.header}>
              <h3>Sign In</h3>
            </div>
            <div className={styles.form}>
              <FormControl>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input
                  id="email"
                  onChange={event => this.setState(byPropName('email', event.target.value))}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  type="password"
                  id="password"
                  onChange={event => this.setState(byPropName('password', event.target.value))}
                />
              </FormControl>
              <FormControl style={{color: 'red', fontSize: '.3em'}}>
                {error && <p>{error.message}</p>}
              </FormControl>
              <FormControl>
                <Button
                  className={styles.button}
                  variant="contained"
                  color="primary"
                  onClick={this.onSubmit}
                >
                  Sign In
                </Button>
              </FormControl>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withRouter(SignInPage);
