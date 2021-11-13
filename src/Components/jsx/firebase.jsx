import React from "react";
import firebase from "./firebase1";
import "../css/sigin.css"
import { useEffect } from "react";
var O=[]
//console.log(O)
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: "block",
      count1: "none",
      phone:"",
      error:"",
      set:false
    };
  }
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    this.setState({ error:""})
  };
  
  configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          this.onSignInSubmit();
          console.log("Recaptca varified");
        },
        defaultCountry: "IN",
      }
    );
  };
  onSignInSubmit = (e) => {
  //  console.log(this.state.mobile.length)
    // e.preventDefault();
   // console.log(this.state.mobile)
   if(this.state.mobile){
    if(this.state.mobile.length===10){
    this.configureCaptcha();
    const phoneNumber = "+91" + this.state.mobile;
    console.log(phoneNumber);
    this.setState({phone:phoneNumber})
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("OTP has been sent");
        this.setState({ count: "none",count1: "block"})
        console.log(O)
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...   O.push("ss")
        console.log(O)
       // this.setState({ count: "none",count1: "block"})
        console.log("SMS not sent");
        this.setState({ error:"please try again"})
       // document.getElementById("sign-in-button").style.borderColor="green"
     
      });}else{
        this.setState({ error:"enter valid number"})
        document.getElementById("sign-in-button").style.borderColor="red"
      }
    }else{
      this.setState({ error:"enter your mobile number"})
      document.getElementById("sign-in-button").style.borderColor="red"
      }
  };
  onSubmitOTP = (e) => {
    e.preventDefault();

    const code = this.state.otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user));
        // alert("User is verified");
        this.setState({set:true})
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
        document.getElementById("otp").style.borderColor="red"
        alert("wrong otp")
      });
    
    
  };
  render() {
  

    console.log(this.props.p)
    console.log(this.props.display)
if(this.state.set===true){
  this.props.auth(true)
  this.props.show(false)
}
    const displayNone = () => {
      document.getElementById('container1').style.display = 'none'
      this.setState({ count: "block"})
  }
    return (
      <>
      
      <div style={{display: this.state.count}}  className="Modalbackground">
    
        <div className="modal_cont">
      
          <div className="upp_grey">
            <span>Login/Signup with OTP</span>
           
            <div className="right_x" onClick={()=>{this.props.show(false)}}>X</div>
          </div>

          <div className="cont_img">
            <div className="img_i">
              <img
                src="https://static.abhibus.com/img/icons/left-img.png"
                alt=""
              />
            </div>
            <div className="other_c">
              <input id="sign-in-button"
                required
                type="number"
                name="mobile"
                placeholder="Mobile number"
              
                onChange={this.handleChange}
              />
                 <div style={{fontSize:"14px",color:"red",marginBottom:"-19px"}}>{this.state.error}</div>
              <p
              onClick={this.onSignInSubmit}
              >
                Login/Signup with OTP
              </p>
            
              <div>or login with</div>
              <div>
            
                <div>
                  <img
                    src="https://static.abhibus.com/img/icons/facebook-32.png"
                    alt=""
                  />
                  <span>Facebook</span>
                </div>
                <div>
                  <img
                    src="https://static.abhibus.com/img/icons/google-32.png"
                    alt=""
                  />
                  <span>Google</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        {/* style={{display: this.state.count1}}  */}
      </div>
      <div style={{display: this.state.count1}}  className="Modalbackground">
      
      <div className="modal_cont_1">
        <div className="upp_grey">
          <span>Login/Signup with OTP</span>
          <div className="right_x" onClick={()=>{this.props.show(false)}}>X</div>
        </div>
        <div className="cont_img">
          <div className="img_i">
            <img style={{width:"100%"}}
              src="https://findpanditji.in/assets/img/otp_icon.png"
              alt=""
            />
          </div>

          <div className="other_c">
          <div style={{color:"red",marginTop:"10px"}}>
             { this.state.phone}
              
             </div>
             <div  style={{color:"green",marginTop:"10px"}}>We have sent the verification code to</div>
          
            <input id="otp"
              required
              type="number"
              name="otp"
              placeholder="otp"
        
              onChange={this.handleChange}
            />
            <button
            onClick={this.onSubmitOTP}
            >
              verify
            </button>
           
         
          </div>
        </div>
      </div>
      {/* style={{display: this.state.count1}}  */}
    </div>
      </>
    );
  }
}
export default App;

// onClick={()=>{show(false)}}
