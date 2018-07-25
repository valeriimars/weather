import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDy9wHw0ElgwxNQad8P8ppQQiBAx7nKGrM",
  authDomain: "weatherapp-f614b.firebaseapp.com",
  databaseURL: "https://weatherapp-f614b.firebaseio.com",
  projectId: "weatherapp-f614b",
  storageBucket: "weatherapp-f614b.appspot.com",
  messagingSenderId: "902340758401",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const database = firebase.database();
export const auth = firebase.auth();
export const storage = firebase.storage();
