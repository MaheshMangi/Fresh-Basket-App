// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAPUKEHv38xAJPMTO2iJXmfuJaWucio44E',
  authDomain: 'food-app-b4c2c.firebaseapp.com',
  projectId: 'food-app-b4c2c',
  storageBucket: 'food-app-b4c2c.appspot.com',
  messagingSenderId: '1016883177002',
  appId: '1:1016883177002:web:9cb7e2346177de5d500553',
  measurementId: 'G-M8FY0G1G9D'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
