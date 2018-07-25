import { database } from './firebase';


export const createUser = (id, username, email) =>
  database.ref(`users/${id}`).set({
    username,
    email,
  });

export const onceGetUsers = () => database.ref('users').once('value');
