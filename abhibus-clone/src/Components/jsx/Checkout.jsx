import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../css/Checkout.css";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
export const Checkout = () => {
  return (
    <>
      <div className="row passenger_details">
        {" "}
        <h4>Passenger Details</h4>{" "}
      </div>
      <div className="row ">
        <div className="col-md-4 account-detail-div">
          <div className="row account-details">
            {" "}
            <h6>IRCTC Account Details </h6>{" "}
          </div>
          <div className="row account-detail-text">
            <p>
              *You will be redirected to IRCTC page after payment to enter IRCTC
              user id and password to complete booking Please ensure you
              remember IRCTC user ID and Password
            </p>{" "}
          </div>
          <div className="row inputbox-btn-container">
            <div className="col-md-3 padding-0">
              {" "}
              <input
                className="irctc-user-id-input"
                type="text"
                placeholder="IRCTC User ID"
              ></input>{" "}
            </div>
            <div className="col-md-1 pading-0">
              <button className="verify-btn"> Verify</button>
            </div>
            <div className="col-md-2">
              <button className="cancel-btn">Cancel</button>
            </div>
            <div className="row text-1">
              IRCTC password will be asked after payment for successful booking.
              <div className="col">
              <div className="vertical-dotted-line">
                {" "}
                <p className="text">
                  Have you not registered with IRCTC ?
                </p>{" "}
                <div>
                  <button className="irctc-user-book-btn">
                    Create IRCTC User ID
                  </button>
                </div>{" "}
              </div>
            </div>
            </div>
          </div>
          Col 1
        </div>
        <div className="col-md-5 journey-details">
          <div className="col-2-div">
            <div>
              <h5>Journey Details</h5>
            </div>
            <hr className="hr-line"></hr>
            <div className="train-details-icon">
              <img
                src="https://www.abhibus.com/trains/images/train-b-icon.png"
                alt=""
              />
              <div className="num-text">02629</div>
            </div>
            <div className="train-sampark-kranti">SAMPARK KRANTI</div>
            <div className="train-timing">Thu, 07 Oct 2021 | 2S | GN </div>
            <div className="train-status">
              <div className="train-timing">Current Status:&nbsp; </div>
              <div className="train-status-text">Available 0164</div>{" "}
            </div>
          </div>
          <hr></hr>
          <div className="boarding-text">Boarding Point</div>
          <select className="boarding-select-box">
            <option value="YESVANTPUR">YESVANTPUR</option>
            <option value="TUMAKURU">TUMAKURU</option>
          </select>
          {/* <FontAwesomeIcon icon='cofee'></FontAwesomeIcon> */}
          <div className="bnc-detail-div">
            <p>BENGALURU CANT - BNC</p>
            <span className="bnc-train-time">15:30</span>
          </div>
          col2
        </div>
      </div>
      <div className='row passenger-details'>
          <div className='col'>Enter Passenger Details</div>
          <div className='row passenger-detail-input'>
          <div className='col'><input className='input-1' type='text' placeholder='Full Name'></input></div>
          <div className='col'><input className='input-2'  type='text' placeholder='Age'></input></div>
          <div className='col'><select className='gen-select'><option value="">Male</option><option value="">Female</option><option value="">Transgender</option></select></div>
          <div className='col-md-4'><select><option>India</option></select></div>
          <div className='col'><button>Cancel</button></div>
          <div className='col'><button>Save</button></div>
      </div>  
      </div>
      <div className='row-4'>
      <div className='row-1'>
          <div className='text-3'><p>Contact Information-&nbsp; </p> </div>
          <div className='text-4'><p>we will send ticket and other info on this</p></div>
      </div> 
      <div className='row-2'>
          <div><input className='email-box' placeholder='Enter Your Email ID'></input></div>
          <div className='cont-code'>+91</div><div><input placeholder='Enter your Number'></input></div>
      </div>
      </div>
      <div className='row-4'>
      <div className='row-1'>
          <div className='text-3'><p>Passenger Destination-&nbsp; </p> </div>
          <div className='text-4'><p>we will send ticket and other info on this</p></div>
      </div> 
      <div className='row-2'>
          <div><input className='email-box' placeholder='Enter Your Email ID'></input></div>
          <div className='cont-code'>+91</div><div><input placeholder='Enter your Number'></input></div>
      </div>
      </div>
    </>
  );
};
