
import "../components/css/offers.css"

function Offers(){
    return (
        <>
        <div className="booking">Bus Booking offers</div>
        <div className="below_booking">
            <div className="bb_1">
                <p className="Search_b">Search for Bus Tickets</p>
                <div className="flexo">
                    <input type="text" placeholder="Going to " className="in1"/>
                    <input type="text" placeholder="Leaving from " className="in2"/>
                    <input type="text" placeholder="Date of journey " className="in3"/>
                    <input type="text" placeholder="Date of Return (optional) " className="in4"/>
                    <div class = "button">Search</div>
                </div>
            </div>
            <div className="rightbox">
                <p>Are you looking for online bus booking offers? You can find bus ticket offers, coupons or discount promo codes for bus ticket booking at AbhiBus.com. Be it new user offer or valid for all users, you can find all the best bus booking offers, promo codes and payment partner offers available on this page.</p>
                <p>You can find exciting bus booking offers available on the AbhiBus platform both on website and Mobile APP!! Keep an eye for APP only offers, you could steal a deal!</p>
                <p>Hurry up!!! Plan your trip and take the advantage of amazing bus ticket booking offers from AbhiBus across India. Avail of the discount offers and coupon codes applicable to book your bus ticket today!!!</p>
                <h2>Bus Ticket Booking Offers Online at ABhiBus</h2>
                <p>We provide you with a range of options to select from, to ensure you have a comfortable journey with AbhiBus. Choose from a large catalogue of buses, choose your favourite seat, bus amenities and at lowest fares. Book online bus tickets across India from a wide range of bus partners with AbhiBus. AbhiBus offers discounts & cashbacks for both new users and all users. Select the best combination and book your bus tickets to get maximum savings.   Read More..</p>
            </div>
        </div>
        <div className="below_search">
            <div className="card1">
            <img src="https://static.abhibus.com/busgallery/offerbanners/Sep2021/24/1632469654-325x135.jpg" alt="" />
              <h6>Super Cashback Offer: Get Upto Rs.350 Assured Cashback</h6>
              <div className="hover">More details</div>
            </div>
            <div className="card1">
            <img src="https://static.abhibus.com/busgallery/offerbanners/Sep2021/28/1632815276-325x135.png" alt="" />
              <h6>20% Off on 1st Booking with CRED Pay</h6>
              <div className="hover">More details</div>
            </div>
            <div className="card1">
            <img src="https://static.abhibus.com/busgallery/offerbanners/Sep2021/24/1632469391-325x135-s.png" alt="" />
              <h6>Simpl September: Get Upto Rs.300 Instant Discount & Rs.200 Cashback</h6>
              <div className="hover">More details</div>
            </div>
            <div className="card1">
            <img src="https://static.abhibus.com/busgallery/offerbanners/Sep2021/28/1632815418-325X135.png" alt="" />
              <h6>Get Upto Rs.700 Cashback on your next 7 bookings with PhonePe Wallet</h6>
              <div className="hover">More details</div>
            </div>
            <div className="card1">
            <img src="https://static.abhibus.com/busgallery/offerbanners/Apr2021/10/1618038241-325X135.png" alt="" />
              <h6>Freecharge Offer - Flat 10% Upto Rs.75 Cashback</h6>
              <div className="hover">More details</div>
            </div>
            <div className="card1">
            <img src="https://static.abhibus.com/busgallery/offerbanners/Sep2021/28/1632815004-325X135.png" alt="" />
              <h6>Upto Rs.200 Cashback on MobiKwik</h6>
              <div className="hover">More details</div>
            </div>
            <div className="card1">
            <img src="https://static.abhibus.com/busgallery/offerbanners/Sep2021/28/1632815518-325X135.png" alt="" />
              <h6>Get Flat Rs.50 Cashback from OLA Money Postpaid+</h6>
              <div className="hover">More details</div>
            </div>

        </div>
        </>
    )
}
export {Offers}