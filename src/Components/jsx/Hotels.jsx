import "../css/Bus.css";
import Carousel from "./Sliderbar";
// Or for ES2015 module
import { Link } from "react-router-dom";
import { FAQ } from "./FAQ";
import {useLocation} from "react-router-dom";
import { useState } from "react";

function Train() {
  const search = useLocation().search;
  const name = new URLSearchParams(search).get('name');
  console.log(name)
  const [city, SetCity] = useState("");

  return (
    <div style={{ backgroundColor: "rgb(249, 249, 249" }}>
      <div>
        <input
          className="t-input_1"
          type="text"
          required
          id="input_1"
          onChange={(e) => {
            document.getElementById("input_1").style.borderColor="black"
            SetCity(e.target.value);
            console.log(city);
          }}
          name="f"
          placeholder="Search.."
        />
        <input
          className="t-input_3"
          placeholder="Type Date"
          type="date"
          required
          name="f"
          id="date"
        />
        <input
          className="t-input_3"
          type="date"
          required
          id="date1"
          name="f"
          placeholder="Search.."
        />{" "}
        <button
          onClick={() => {
            let u=  document.getElementById("date").value
            let v=  document.getElementById("date1").value
            if (city&&u&&v) {
            
          //  console.log(u,v)
              window.location.href = `/Hotel?city=${city}&date=${u}&date1=${v}`;
            }else{
              document.getElementById("input_1").style.borderColor="red"
            }
          }}
          className="t-input_4"
        >
          {" "}
          Search
        </button>
      </div>

      <div
        style={{
          backgroundImage: `url("https://static.abhibus.com/assets/img/hotel-seach-bg.png")`,
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
          width: "97%",
          backgroundColor: "white",
          margin: "auto",
          marginTop: "-60px",
          //   boxShadow:
          //     "0 1px 17px 0 rgba(0, 0, 0, 0.1), 0 1px 4px 0 rgba(0, 0, 0, 0.6)",
          border: "0.09px solid rgb(214, 214, 214)",
        }}
      >
        <div>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "25px",
              textAlign: "left",
              marginLeft: "-80%",
            }}
          >
            AbhiBus Offers
          </span>
          <span></span>
          <span></span>
        </div>
        <div
          style={{
            width: "95%",
            margin: "auto",
            backgroundColor: "white",
            marginTop: "5px",
          }}
        >
          {" "}
          <Carousel />
        </div>
      </div>

      <div className="hotal_mid_box">
        <div className="hotal_mid_box_1">
          <img
            className="hotal_mid_box_1_1"
            src="https://static.abhibus.com/busgallery/popularCities/1519842600_hyd.jpg"
            alt=""
          />
          <div className="hotal_mid_box_1_2">
            <div className="hotal_mid_box_1_2_1">Price starts at</div>
            <div className="hotal_mid_box_1_2_2">660 ₹</div>
            <div className="hotal_mid_box_1_2_3">Book Now</div>
          </div>
        </div>
        <div className="hotal_mid_box_1">
          <img
            className="hotal_mid_box_1_1"
            src="https://static.abhibus.com/busgallery/popularCities/1519842600_gan.jpg"
            alt=""
          />
          <div className="hotal_mid_box_1_2">
            <div className="hotal_mid_box_1_2_1">Price starts at</div>
            <div className="hotal_mid_box_1_2_2">660 ₹</div>
            <div className="hotal_mid_box_1_2_3">Book Now</div>
          </div>
        </div>
        <div className="hotal_mid_box_1">
          <img
            className="hotal_mid_box_1_1"
            src="https://static.abhibus.com/busgallery/popularCities/1519842600_mum.jpg"
            alt=""
          />
          <div className="hotal_mid_box_1_2">
            <div className="hotal_mid_box_1_2_1">Price starts at</div>
            <div className="hotal_mid_box_1_2_2">660 ₹</div>
            <div className="hotal_mid_box_1_2_3">Book Now</div>
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
      <FAQ />
    </div>
  );
}
export default Train;
