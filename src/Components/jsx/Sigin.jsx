import "../css/sigin.css"
// import {P11} from "./firebase"
import { useState } from "react"
// var t= []
function Modal({show}){
    show(false)
    const [num,setNum]=useState()
    const [num1,setNum1]=useState(false)
return <>
    <div className="Modalbackground">
       
        <div className="modal_cont">
            <div className="upp_grey">
             <span>
             Login/Signup with OTP

             </span>
             <div className="right_x" onClick={()=>{show(false)}}>X</div>
            </div>
            <div className="cont_img">
                <div className="img_i">
                    <img src="https://static.abhibus.com/img/icons/left-img.png" alt="" />
                </div>
                <div className="other_c">
                    <input type="number" onChange={(e)=>{
                        setNum(e.target.value)
                    }} placeholder="Enter your mobile number"/>
                    <p onClick={()=>{
                       setNum1(true)
                    }}>Login/Signup with OTP</p>
                    <div>or login with</div>
                    <div>
                        <div>
                            <img src="https://static.abhibus.com/img/icons/facebook-32.png" alt="" />
                            <span>Facebook</span>
                        </div>
                        <div>
                            <img src="https://static.abhibus.com/img/icons/google-32.png" alt="" />
                            <span >Google</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    {/* <P11 value={num}value1={num1}/> */}
</>
}
export {Modal}
