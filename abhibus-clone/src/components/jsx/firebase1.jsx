// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const Config = {
  apiKey: "AIzaSyB8iAi1GsVh6HvqVy3X14Vvp8-ZwXRA01Y",
  authDomain: "crucial-cabinet-327718.firebaseapp.com",
  projectId: "crucial-cabinet-327718",
  storageBucket: "crucial-cabinet-327718.appspot.com",
  messagingSenderId: "529871120731",
  appId: "1:529871120731:web:92c60ab1cc6150bd60927e",
  measurementId: "G-C0XX03JWCQ"
};

// Initialize Firebase
const app = initializeApp(Config);
const analytics = getAnalytics(app);
export default app
// import firebase from 'firebase';
  
// const firebaseConfig = {
//   apiKey: "AIzaSyB8iAi1GsVh6HvqVy3X14Vvp8-ZwXRA01Y",
//     authDomain: "crucial-cabinet-327718.firebaseapp.com",
//     projectId: "crucial-cabinet-327718",
//     storageBucket: "crucial-cabinet-327718.appspot.com",
//     messagingSenderId: "529871120731",
//     appId: "1:529871120731:web:92c60ab1cc6150bd60927e",
//     measurementId: "G-C0XX03JWCQ"
// };
  
// firebase.initializeApp(firebaseConfig);
// var auth = firebase.auth();
// export {auth , firebase};