import { database } from './firebase';


export const createUser = (id, username, email) =>
  database.ref(`users/${id}`).set({
    username,
    email,
    firstName: '',
    lastName: '',
    homeLocation: '',
    workLocation: '',
    imageUrl: '',
  });

export const onceGetUsers = () => database.ref('users').once('value');
export const getUserDatabaseById = (userId) => database.ref(`users/${userId}`);
