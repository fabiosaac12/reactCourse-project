import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBWF41J8Huj0-qFh6Ofyr_OJ3XOct5TCWU",
    authDomain: "react-course-c9870.firebaseapp.com",
    projectId: "react-course-c9870",
    storageBucket: "react-course-c9870.appspot.com",
    messagingSenderId: "709692387758",
    appId: "1:709692387758:web:8aba5f60aaf73c0dd1d83f"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;