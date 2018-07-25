import {auth} from './firebase';

export const createUserWithEmailAndPassword = (email, password) => auth.createUserWithEmailAndPassword(email, password);
export const signInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword(email, password);
export const signOut = () => auth.signOut();
export const resetPassword = (email) => auth.sendPasswordResetEmail(email);
export const doPasswordUpdate = (password) => auth.currentUser.updatePassword(password);
export const getLoggedInUser = () => auth.currentUser;
export const updateCurrentUser = () => auth.updateCurrentUser();