import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { cityDb } from './temp/m-city-export';

const firebaseConfig = {
  apiKey: "AIzaSyCWQiqdArP0InisJKmu098i0BCrCSxc4oE",
  authDomain: "mcity-2560d.firebaseapp.com",
  projectId: "mcity-2560d",
  storageBucket: "mcity-2560d.appspot.com",
  messagingSenderId: "307454487679",
  appId: "1:307454487679:web:28df79a2fe1994de1fe34a",
  measurementId: "G-W00PHJMPPW"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const DB = firebase.firestore();
const matchesCollection = DB.collection('matches');
const playersCollection = DB.collection('players');
const positionsCollection = DB.collection('positions');
const promotionsCollection = DB.collection('promotions');
const teamsCollection = DB.collection('teams');

// cityDb.matches.forEach(item => {
//   matchesCollection.add(item)
// });

// cityDb.players.forEach(item => {
//   playersCollection.add(item)
// });

// cityDb.positions.forEach(item => {
//   positionsCollection.add(item)
// });

// cityDb.promotions.forEach(item => {
//   promotionsCollection.add(item)
// });

// cityDb.teams.forEach(item => {
//   teamsCollection.add(item)
// });



export {
    firebase,
    matchesCollection,
    playersCollection,
    positionsCollection,
    promotionsCollection,
    teamsCollection
}