import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyCbj97pEjMNdgsoRp11hDDJBJrUz_0rGbE",
  authDomain: "wayhyped-db.firebaseapp.com",
  projectId: "wayhyped-db",
  storageBucket: "wayhyped-db.appspot.com",
  messagingSenderId: "149679607292",
  appId: "1:149679607292:web:4c5a5333bc2febdd84b679",
  measurementId: "G-T571TM33ZS"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase