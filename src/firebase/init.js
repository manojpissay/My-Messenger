import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDQka_e93o9zxmEMVRRyDdT_L0bLrRCl1s",
    authDomain: "my-messenger-b289e.firebaseapp.com",
    databaseURL: "https://my-messenger-b289e.firebaseio.com",
    projectId: "my-messenger-b289e",
    storageBucket: "my-messenger-b289e.appspot.com",
    messagingSenderId: "544864624089",
    appId: "1:544864624089:web:5918add90e68e7b0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()