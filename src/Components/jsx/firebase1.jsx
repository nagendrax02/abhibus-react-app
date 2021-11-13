import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyB8iAi1GsVh6HvqVy3X14Vvp8-ZwXRA01Y",
  authDomain: "crucial-cabinet-327718.firebaseapp.com",
  projectId: "crucial-cabinet-327718",
  storageBucket: "crucial-cabinet-327718.appspot.com",
  messagingSenderId: "529871120731",
  appId: "1:529871120731:web:92c60ab1cc6150bd60927e",
  measurementId: "G-C0XX03JWCQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase
