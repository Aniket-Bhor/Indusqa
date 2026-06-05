// Firebase Configuration and Initialization
const firebaseConfig = {
  apiKey: "AIzaSyAYt8SrZwI9F0b4WLwTrl9NUJlSSmK8V8A",
  authDomain: "indusqa-903ed.firebaseapp.com",
  databaseURL: "https://indusqa-903ed-default-rtdb.firebaseio.com",
  projectId: "indusqa-903ed",
  storageBucket: "indusqa-903ed.firebasestorage.app",
  messagingSenderId: "618441921514",
  appId: "1:618441921514:web:f0f087f05cfd70bf455893",
  measurementId: "G-ZMQKTE7G0W"
};

// Initialize Firebase if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Get a reference to the database service
const database = firebase.database();