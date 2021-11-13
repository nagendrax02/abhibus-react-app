import "../css/Bus.css";
import Carousel from "./Sliderbar";
// Or for ES2015 module
import {FAQ} from "./FAQ"
function Train() {
 

  return (
    <div style={{ backgroundColor: "rgb(249, 249, 249" }}>
      <div>
        <input
          className="t-input_1"
          type="text"
          name="f"
          placeholder="Search.."
        />
        <img
          style={{
            position: "absolute",
            width: "25px",
            marginTop: "13px",
            marginLeft: "-13px",
          }}
          src="https://static.abhibus.com/assets/img/twoway.png"
          alt=""
        />
        <input
          className="t-input_2"
          type="text"
          name="f"
          placeholder="Search.."
        />
        <input
          className="t-input_3"
          type="date"
          name="f"
          placeholder="Search.."
        />
        <button className="t-input_4">Search Trains</button>
      </div>

      <div
        style={{
          backgroundImage: `url("https://static.abhibus.com/img/abhilogos/bus-seach-bg-new.jpg")`,
          width: "100%",
          height: "500px",
          marginTop: "-260px",
          backgroundColor: "gray",
          backgroundPositionX: "50%",
        
        }}
      >
        <img style={{}} src="" alt="" />
      </div>
      <div
        style={{
         
          paddingTop: "16px",
          paddingBottom: "15px",
         width:"97%",
         backgroundColor: "white",
         margin:"auto",
         marginTop:"-60px",
         boxShadow: "0 1px 17px 0 rgba(0, 0, 0, 0.1), 0 1px 4px 0 rgba(0, 0, 0, 0.6)"
        }}
      >
        <div>
          <span style={{fontWeight:"bold",fontSize:"25px",textAlign:"left",marginLeft:"-80%",}}>AbhiBus Offers</span>
          <span></span>
          <span></span>
        </div>
        <div style={{width:"95%",margin:"auto",  backgroundColor: "white",marginTop:"5px"}}> <Carousel /></div>
       
      </div>

      <div
        style={{
          textAlign: "left",
          fontWeight: "bold",
          marginLeft: "24px",
          marginBottom: "7px",
          marginTop: "30px",
        }}
      >
        Important Links
      </div>
      <div className="mid_box">
        <div className="mid_box_1">
          <div>
            <img
              src="https://www.abhibus.com/trains/images/pnr-status-icon.png"
              alt=""
            />
            <div>PNR status</div>
          </div>
          <div>
            <img
              src="https://www.abhibus.com/trains/images/coach-icon.png"
              alt=""
            />
            <div>PNR status</div>
          </div>
          <div>
            <img
              src="https://www.abhibus.com/trains/images/route-icon.png"
              alt=""
            />
            <div>PNR status</div>
          </div>
          <div>
            <img
              src="https://www.abhibus.com/trains/images/train-icon.png"
              alt=""
            />
            <div>PNR status</div>
          </div>
        </div>
        <img
          className="mid_box_2"
          src="https://static.abhibus.com/trains/trains-right-banner.jpg"
          alt=""
        />
      </div>
      <div className="mid_box_down">
        <div>
          <img
            src="https://www.abhibus.com/trains/images/multi-devices1.png"
            alt=""
          />
          <div>Easy and Fast Bookings</div>
          <p>
            Lightening Fast bookings on AbhiBus apps and web. Get your tickets
            instantly!
          </p>
        </div>
        <div>
          <img
            src="https://www.abhibus.com/trains/images/easy-cancels1.png"
            alt=""
          />
          <div>Easy Cancellation and Refunds</div>
          <p>Cancel with one-click and get faster refunds with AbhiBus!</p>
        </div>
        <div>
          <img
            src="https://www.abhibus.com/trains/images/check-pnrs1.png"
            alt=""
          />
          <div>Check your PNR anytime</div>
          <p>
            Track your PNR status instantly! Get notified when the ticket
            confirms!
          </p>
        </div>
        <div>
          <img
            src="https://www.abhibus.com/trains/images/secures1.png"
            alt=""
          />
          <div>Secured payments & 24/7 support</div>
          <p>
            We provide secured payment options and our best customer support for
            you!
          </p>
        </div>
      </div>
      <div
        style={{
          textAlign: "left",
          fontWeight: "bold",
          marginLeft: "24px",
          marginBottom: "15px",
        }}
      >
        How to Book Train Ticket on Abhibus
      </div>
      <div className="mid_1_box">
        <div>
          <img
            src="https://www.abhibus.com/trains//images/how-to-1.png"
            alt=""
          />
          <div>Select Train & Make Payment</div>
        </div>
        <img
          src="https://www.abhibus.com/trains//images/how-to-arrow.png"
          alt=""
        />
        <div>
          <img
            src="https://www.abhibus.com/trains//images/how-to-2.png"
            alt=""
          />
          <div>Enter IRCTC Password or Reset if forgotten</div>
        </div>
        <img
          src="https://www.abhibus.com/trains//images/how-to-arrow.png"
          alt=""
        />
        <div>
          <img
            src="https://www.abhibus.com/trains//images/how-to-3.png"
            alt=""
          />
          <div>Complete Booking & Have a nice trip</div>
        </div>
      </div>
      <div className="mid_2_box">
        <p>Book Train e-Tickets with AbhiBus</p>
        <div>
          <img
            src="https://www.abhibus.com/trains/images/buy-tickets.png"
            alt=""
          />
          <div>
            You can now book your train tickets on AbhiBus website and Mobile
            App. Booking IRCTC train tickets is an easy process with AbhiBus
            without any hassles.At AbhiBus website & mobile app you can:
            <ul>
              <li>Book trains for any destination, className or train type.</li>
              <li>Check PNR status of your ticket</li>
              <li>
                Find trains between stations, fares and seat availability of
                different classNamees in trains
              </li>
              <li>
                Check the schedule, route and coach position of different trains
              </li>
              <li>Manage your ticket – download, cancel your tickets easily</li>
              AbhiBus assures you a very easy booking with support for all
              payment modes.
            </ul>
          </div>
        </div>
      </div>
      <div className="mid_3_box">
        <p>Book Train e-Tickets with AbhiBus</p>
        <div>
          <div>
            You can now book your train tickets on AbhiBus website and Mobile
            App. Booking IRCTC train tickets is an easy process with AbhiBus
            without any hassles.At AbhiBus website & mobile app you can:
            <ul>
              <li>
                {" "}
                Visit www.AbhiBus.com/trains or open AbhiBus mobile app –
                android or iOS
              </li>
              <li>
                Select Source and Destination cities, Date of the journey, then
                click “Search” button
              </li>
              <li>
                Choose your train and check seat availability for the same
              </li>
              <li>Select seat className & date that suits you the best</li>
              <li>
                Click on “Book” button and enter your IRCTC user ID (If you do
                not have a User Id then choose “Create IRCTC UserID” option or
                reset it by clicking on “Forgot IRCTC Password” button)
              </li>
              <li>Fill the requisite form and click “Book” button</li>
              <li>
                Now proceed for payment, Choose method of your preference i.e.
                Debit/Credit Card, Net banking or AbhiCash. All our payment
                means are secure and protected.
              </li>
              <li>
                You will be redirected to IRCTC to enter the password for the
                user ID entered earlier and confirm. You are done with it!”
              </li>
            </ul>
            Yo You are done with it!” You will also receive an instant auto
            update of your payment and ticket through an e-mail & message on
            your registered mobile numbers or email ids. So no need to carry
            hardcopy of your tickets.
            <br />
            <br />
            Now book train tickets at AbhiBus!
          </div>

          <img
            src="https://www.abhibus.com/trains/images/ticket-bg.png"
            alt=""
          />
        </div>
      </div>
      <FAQ/>
    </div>
  );
}
export default Train;
