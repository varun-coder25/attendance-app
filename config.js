import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBk89ByBcggBLzZhGygkCdgElvUvEHUf1c",
  authDomain: "attendance-app-2c81d.firebaseapp.com",
  databaseURL: "https://attendance-app-2c81d-default-rtdb.firebaseio.com",
  projectId: "attendance-app-2c81d",
  storageBucket: "attendance-app-2c81d.appspot.com",
  messagingSenderId: "435731669443",
  appId: "1:435731669443:web:4cddab40d9594d94c99d76"
  };


// Initialize Firebase
let app =   firebase.initializeApp(firebaseConfig);
export default app.database();
