import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNuvoSdX8LKcxP8popRISYckZXrBKAOD8",
  authDomain: "typingcat-a1ad6.firebaseapp.com",
  projectId: "typingcat-a1ad6",
  storageBucket: "typingcat-a1ad6.appspot.com",
  messagingSenderId: "783625678763",
  appId: "1:783625678763:web:abec3554a269d29da72cee",
  measurementId: "G-JQD6GM2HPC"
};

  const firebaseapp =firebase.initializeApp(firebaseConfig)

  const auth = firebase.auth();
  const db = firebaseapp.firestore();

  export {auth,db} 