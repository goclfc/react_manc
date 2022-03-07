import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCWQiqdArP0InisJKmu098i0BCrCSxc4oE",
    authDomain: "mcity-2560d.firebaseapp.com",
    projectId: "mcity-2560d",
    storageBucket: "mcity-2560d.appspot.com",
    messagingSenderId: "307454487679",
    appId: "1:307454487679:web:28df79a2fe1994de1fe34a",
    measurementId: "G-W00PHJMPPW"
  };
    firebase.initializeApp(firebaseConfig);

  export {firebase}
  // Initialize Firebase