// Firebase Configuration
// Replace these values with your actual Firebase project credentials
// Get these from: Firebase Console > Project Settings > General > Your apps > Web app

const firebaseConfig = {
  apiKey: "AIzaSyDee9nb4jsAETgs8YISYcNuBpBhNTBf_eQ",
  authDomain: "mahbubkousar-78458.firebaseapp.com",
  databaseURL: "https://mahbubkousar-78458-default-rtdb.firebaseio.com",
  projectId: "mahbubkousar-78458",
  storageBucket: "mahbubkousar-78458.firebasestorage.app",
  messagingSenderId: "983455497310",
  appId: "1:983455497310:web:083eeb7b7320bb237848cf",
  measurementId: "G-NKS6NP19Y3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();
