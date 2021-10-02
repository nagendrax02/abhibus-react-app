import { Component } from "react";
import firebase from "./firebase1";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
// import { getAuth, RecaptchaVerifier } from "firebase/auth";
// import { getAuth, RecaptchaVerifier,signInWithPhoneNumber  } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// const auth = getAuth();
// auth.languageCode = 'it';
export default function app1(){


    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
     console.log(response)
      }
    }, auth);
    
return <><div>df</div></>

}
// auth.languageCode = 'it';
// export default function f(){
  

// // const auth = getAuth();
// // auth.languageCode = 'it';


// const auth = getAuth();
// window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
//   'size': 'invisible',
//   'callback': (response) => {
//     // reCAPTCHA solved, allow signInWithPhoneNumber.
//     // onSignInSubmit()
//     console.log(response);
//   }
// }, auth);
// }
// export class App1 extends Component {
    

//   handleClick = () => {
//     let recaptcha = new RecaptchaVerifier('recaptcha');
//     let number = "+919548076679";
   
//       signInWithPhoneNumber(number,recaptcha)
//       .then(function (e) {
//         let code = prompt("enter the otp", "");
//         if (code === null) return;
//         e.confirm(code)
//           .then(function (result) {
//             console.log(result.user);
//             document.querySelector("label").textContent =
//               result.user.phoneNumber + "Number";
//           })
//           .catch((error) => {
//             console.log(console.error());
//           });
//       });
//   };
//   render() {
//     return (
//       <div>
//         <label></label>
//         <button onClick={this.handleClick}></button>
//       </div>
//     );
//   }
// }
