import firebase from "firebase/app";
import 'firebase/auth';        // for authentication
import 'firebase/firestore';   // for cloud firestore

// import 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyCHEY3WerjYEr7UrWZ0QJ5JA8gZ4CluuCY",
    authDomain: "redpine-inn.firebaseapp.com",
    databaseURL: "https://redpine-inn.firebaseio.com",
    projectId: "redpine-inn",
    storageBucket: "redpine-inn.appspot.com",
    messagingSenderId: "696783864080",
    appId: "1:696783864080:web:51ce05b3c8a225ac8ee595",
    measurementId: "G-2SJN42L3F0"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebaseApp.firestore();