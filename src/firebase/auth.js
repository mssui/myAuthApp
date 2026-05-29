import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './config';

const auth = getAuth(app);

export const signUp = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const observeAuth = (callback) => {
  return onAuthStateChanged(auth, callback);
};