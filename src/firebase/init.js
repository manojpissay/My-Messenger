import firebase from 'firebase'

var firebaseConfig = {
    apiKey: " ",
    authDomain: " ",
    databaseURL: " ",
    projectId: " ",
    storageBucket: " ",
    messagingSenderId: " ",
    appId: " "
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()
