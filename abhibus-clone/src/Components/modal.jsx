import "./modals.css"
function Modal({show}){
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
                    <input type="text" placeholder="Enter your mobile number"/>
                    <div>Login/Signup with OTP</div>
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
</>
}
export {Modal}