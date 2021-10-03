import { Link, useLocation } from "react-router-dom";
import "../css/Header.css";

import Modal from "./firebase";
import { useState } from "react";
export const Header = () => {

  const [modals, showModal] = useState(false);
  const [auth, showAuth] = useState(false);
   //const [sty, showSty] = useState("block");
let  display="block"
let  display1="none"
if(auth===true){
  display="none"
 
}
if(display==='none'){
    display1="block"
   }
  return (
    <>
      <div >
        <div
          className="header"
          style={{ marginBottom: "50px", position: "fixed", width: "100%" }}
        >
          <div style={{marginTop:"-40px"}} className="logo">
            <Link to="/">
              <img style={{width:"130px",marginTop:"25px"}}
                src="https://static.abhibus.com/img/abhilogos/logo1.png"
                alt="logo"
              ></img>{" "}
            </Link>{" "}
          </div>
          <div className="link-item">
            <div style={{ marginTop: "4px" }} className="link">
              {" "}
              <Link to="/offers">offers</Link>{" "}
            </div>
            <div style={{ marginTop: "4px" }} className="link">
              {" "}
              <Link to="/freeRides">Free Rides</Link>{" "}
            </div>
            <div className="dropdown link">
              <Link className="dropBtn" to="/myBooking">
                {" "}
                My Bookings
                <div className="dropdown-content">
                  <Link to="/printBooking">Print Booking</Link>
                  <Link to="/cancelBooking">Cancel Booking</Link>

                </div>
              </Link>
            </div>
<div>
            <div  >
              {" "}
              <button
              style={{display:display}}
             
                onClick={() => {
                  showModal(true);
                  showAuth(false)
                }}
                className="loginBtn"
              >
                {" "}
                <img src="https://static.abhibus.com/assets/img/prime-user.png"></img>{" "}
                Login / Register
              </button>
              <button
              style={{display:display1,backgroundColor:"#c60001",marginTop:"3px",padding:'5px',color:"white",borderRadius:"10px"}}
             
                onClick={() => {
                    showAuth(false)
                }}
                className="loginBtn"
              >
                {" "}
              
              LogOut
              </button>
            </div>
          </div>
        </div>
      </div>

      {modals && <Modal display={"block"} auth={showAuth} show={showModal} />}
      </div>
    </>
  );
};

// function Login(){
//      const[modals,showModal] = useState(false);
//      return <><button style={{textAlign:"center"}} onClick={()=>{
//          showModal(true);
//      }}>
//          Click me to show login
//      </button>
//     {modals && <Modal show={showModal}/>}
//     </>
// }
// export {Login}
