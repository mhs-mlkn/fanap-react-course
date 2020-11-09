import { auth } from "./firebase";

export function signup(email, password, name) {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then(async user => {
      if (!!user) {
        await auth.currentUser.updateProfile({ displayName: name });
      }
      return user;
    });
}

export function signin(email, password) {
  return auth.signInWithEmailAndPassword(email, password);
}

export function signOut() {
  return auth.signOut();
}