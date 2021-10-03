import "../css/Payments.css"
import { useState } from "react"
function Payment(){
    const [payment,setPayment]=useState()
    const displayPayment = () => {
        // window.backgroundColor = "#303132";
        setPayment(true)
        const div = document.getElementById('payment-success');
        setTimeout(() => {
            setPayment(false)
        },10000)
  }
  return(
      <div style={{marginTop:"-75px"}}>
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
                  <div className="abhigo"></div>
              </div>
              <div  style={{textAlign:"left",border:"solid 0.4px black"}}>
              <div style={{width:"950px",}} className="row">
  <div className="col-75">
    <div className="container">
      <form >
      
        <div className="row">
          <div className="col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i className="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="John M. Doe"/>
            <label for="email"><i className="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="john@example.com"/>
            <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"/>
            <label for="city"><i className="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New York"/>

            <div className="row">
              <div className="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="NY"/>
              </div>
              <div className="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="10001"/>
              </div>
            </div>
          </div>

          <div className="col-50">
            <h3 style={{marginBottom:"-20px"}}>Payment</h3>
          
            <div  className="icon-container">
              <i className="fa fa-cc-visa" style={{"color":"navy"}}></i>
              <i className="fa fa-cc-amex" style={{"color":"blue"}}></i>
              <i className="fa fa-cc-mastercard" style={{"color":"red"}}></i>
              <i className="fa fa-cc-discover" style={{"color":"orange"}}></i>
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe"/>
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"/>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September"/>
            <div className="row">
              <div className="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018"/>
              </div>
              <div className="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352"/>
              </div>
            </div>
          </div>
          
        </div>
        <label>
          <input type="checkbox" checked="checked" name="sameadr"/> Shipping address same as billing
        </label>
        <input onClick={displayPayment} type="submit" value="Continue to checkout" className="btn"/>
      </form>
    </div>
  </div>
  <div className="col-25">
    
  </div>
</div>
              </div>
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
      <div style={{marginBottom:"300px"}}></div>
    
                                      
                                        {payment?<div id="payment-success" className="payment-successful">
                                <img src="https://www.farehawker.com/airlines-group-booking/indigo/img/success.gif" alt="" />
          </div>:console.log("Payment Pending")}
      </div>
  )
}
export {Payment}