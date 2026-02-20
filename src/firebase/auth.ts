import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from './firebase';

export const doCreateUserWithEmailAndPassword = async (
  email: string,
  password: string,
) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSingInWithEmailAndPassword = (
  email: string,
  passowrd: string,
) => {
  return signInWithEmailAndPassword(auth, email, passowrd);
};

export const doSingInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);

  return result;
};

export const doSingOut = () => {
  return auth.signOut();
};
