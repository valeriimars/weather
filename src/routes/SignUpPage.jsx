import React from 'react';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import styles from './SignInPage.css'


const classes = {};

class SignUpPage extends React.Component {
  render() {
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
                <Input id="email"/>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input id="password"/>
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="repeat-password">Repeat Password</InputLabel>
                <Input id="repeat-password"/>
              </FormControl>

              <FormControl>
                <Button variant="outlined" className={styles.button} variant="contained" color="primary">
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

export default SignUpPage;
