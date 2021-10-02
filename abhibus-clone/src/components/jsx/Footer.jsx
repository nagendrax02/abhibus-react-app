import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../css/Footer.css";
export const Footer = () => {
  return (
    <div style={{width:"100%"}} className="footer-main-div">
      <div className="footer-div row">
        <div className="col">
          {" "}
          <h6> Popular Bus Routes </h6>{" "}
        </div>
        <div className="col">
          {" "}
          <h6> Popular Train Routes </h6>{" "}
        </div>
        <div className="col">
          {" "}
          <h6> Popular Hotel Cities </h6>{" "}
        </div>
        <div className="col">
          {" "}
          <h6> Popular Bus Operators </h6>{" "}
        </div>
        <div className="col">
          {" "}
          <h6> More Useful Links </h6>{" "}
        </div>
      </div>
      <div className="row">
        <div className="col">
          {" "}
          <span className="dot"></span>Hyderabad-Bangalore Buses
        </div>
        <div className="col">
          {" "}
          <span className="dot"> </span> Hyderabad - Tirupati Trains
        </div>
        <div className="col">
          <span className="dot"> </span>Hotels in Hyderabad{" "}
        </div>
        <div className="col">
          <span className="dot"> </span> APSRTC
        </div>
        <div className="col">
          <span className="dot"> </span>Check PNR Status
        </div>
      </div>
    </div>
  );
};
