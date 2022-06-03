import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBItDmdJBke2tV1kte0hZzxV198MNiG_l8",
  authDomain: "login-cabeb.firebaseapp.com",
  projectId: "login-cabeb",
  storageBucket: "login-cabeb.appspot.com",
  messagingSenderId: "491949054060",
  appId: "1:491949054060:web:ec10f2e2e6be5630bea049"
};

app.initializeApp(firebaseConfig);
const baseDatos= app.firestore()
const auth= app.auth()

export {baseDatos, auth, app}