import "./Payments.css"
function Payment(){
  return(
      <>
      <h2 className="booking">Booking Confirmation Details & Payment</h2>
      <div className="outside_box">
          <div>
              <div>
                  <div className="guest">
                      <div>
                          <h4>Continue as Guest</h4>
                          <p>(Your booking details will be sent to your email address and contact no. )</p>
                          <input type="text" placeholder="Full Name"/>
                          <input type="email" placeholder="Email Address"/>
                          <input type="text" placeholder="Full Name"/>

                      </div>
                  </div>
                  <div className="line1"></div>
                  <span className="or">or</span>
                  <div className="line2"></div>
                  <div className="abhigo">
                      <p className="ago"><span className="light">Abhi</span> book</p>
                      <p className="ago"><span className="light">Abhi</span> go</p>
                      <div className="inpi">
                      Login & get instant discounts and deals by using your abhicash wallet!.
                      </div>
                      <div className="btn_cont">
                          <div className="login">Login</div>
                          <div className="Signup">Signup</div>
                      </div>
                  </div>
              </div>
              <div></div>
          </div>
          <div>
              <div> 
                  <span>Hurry up ! Book it </span>
              </div>
              <div className="img_holder">
                  <img src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768" alt="" />
              </div>
              <div className="info_loc">
                  <h6>SPOT ON 80671 Bakhtawar Guest House</h6>
                  <p>Nakraunda, Dehradun, Uttarakhand, Dehradun, Uttarakhand, India,Dehradun,Uttarakhand</p>
              </div>
              <div className="room_type">
                    <p>Room type: <span className="dark">Spot on non-ac</span></p>
              </div>
              <div className="ci_co">
                  <div>
                      <p>Check-in: <span className="left">02-10-2021</span> <span className="left li">Sat 12:00 PM</span> </p>
                      <p className="zero">Check-out: <span className="left">02-10-2021</span> <span className="left li">Sat 12:00 PM</span> </p>

                  </div>
              </div>
              <div className="guests">
                  <p>Guests: <span className="left_iu">1 Adult, 1 Room</span></p>
              </div>
              <div className="amount">
                  <div>
                      <div>Amount</div>
                      <div>Rs 823</div>
                  </div>
                  <div>
                      <div>Total cost for one night</div>
                      <div>Rs 823</div>
                  </div>
              </div>
              <div className="last">
                  <div>
                  <div>Total Payable</div>
                      <div className="red">Rs 999</div>
                  </div>
                  <div className="right_sm">1 Room x 1 Night</div>
              </div>
          </div>
      </div>
      </>
  )
}
export {Payment}