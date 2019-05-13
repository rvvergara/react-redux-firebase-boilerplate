import { firebase, githubAuthProvider, googleAuthProvider } from '../firebase/firebase';

const login = uid => ({
  type: 'LOGIN',
  uid,
});

const startGithubLogin = () => () => firebase.auth().signInWithPopup(githubAuthProvider);

const startGoogleLogin = () => () => firebase.auth().signInWithPopup(googleAuthProvider);

const logout = () => ({
  type: 'LOGOUT',
});

const startLogout = () => () => firebase.auth().signOut();

export {
  login,
  logout,
  startGithubLogin,
  startGoogleLogin,
  startLogout,
};
