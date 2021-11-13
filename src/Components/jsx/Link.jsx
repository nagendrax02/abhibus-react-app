import { Link ,useLocation} from "react-router-dom";
import { useState } from "react";

export default function Navbar({value}) {
  let location = useLocation();
  console.log(location.pathname)
  const [trainBut, setTrainBut] = useState(["white","black"]);
  const [bButtton, setBButtton] = useState(["#c60001","white"]);
  const [hButtton, setHButtton] = useState(["white","black"]);
  const [rButtton, setRButtton] = useState(["white","black"]);
  var t='Book Bus Tickets'
 if(location.pathname==="/Trains"){
 t="Book IRCTC Train Tickets"
 
 }
 if(location.pathname==="/Hotels"){
  t='Book Hotels Online'
}
if(location.pathname==="/Rentals"){
  t='Book Rentals'
}


  return (
    <div style={{display:value}}>
      <p style={{fontFamily:"sans-serif",color:"rgb(71, 71, 71)",fontSize:"25px",paddingTop:"100px"}}>{t}</p>
      <div
        style={{
          width: "30%",
          margin: "auto",
          height: "60px",
          marginTop: "60px",
          marginBottom:"20px"
        }}
      >
        <Link
          onClick={() => {
            setBButtton(["#c60001","white"]);
            setTrainBut(["white","black"]);
            setHButtton(["white","black"]);
            setRButtton(["white","black"]);
          }}
          to="/"
          style={{
            textDecoration: "none",
            fontSize: "18px",
            padding: "4px 15px 4px 15px",
            color:  bButtton[1],
            borderRadius: "20px",
            backgroundColor: bButtton[0],
            marginLeft:"-10px"
          }}
        >
          {" "}
          Bus
        </Link>
        <Link
          onClick={() => {
            setTrainBut(["#c60001","white"]);
            setBButtton(["white","black"]);
            setHButtton(["white","black"]);
            setRButtton(["white","black"]);
          }}
          style={{
            marginLeft: "50px",
            textDecoration: "none",
            fontSize: "18px",
            padding: "4px 15px 4px 15px",
            marginLeft:"20px",
            borderRadius: "20px",
            color:  trainBut[1],
            backgroundColor: trainBut[0],
          }}
          to="/Trains"
        >
          Trains
        </Link>
        <Link
          onClick={() => {
            setHButtton(["#c60001","white"]);
            setBButtton(["white","black"]);
            setTrainBut(["white","black"]);
              setRButtton(["white","black"]);
          }}
          style={{
            marginLeft: "50px",
            textDecoration: "none",
            fontSize: "18px",
            color: hButtton[1],
            backgroundColor: hButtton[0],
            padding: "4px 15px 4px 15px",
            marginLeft:"20px",
            borderRadius: "20px",
          }}
          to="/Hotels"
        >
          Hotels
        </Link>
        <Link
          onClick={() => {
            setRButtton(["#c60001","white"]);
            setBButtton(["white","black"]);
            setTrainBut(["white","black"]);
            setHButtton(["white","black"]);
          }}
          style={{
            marginLeft: "50px",
            textDecoration: "none",
            fontSize: "18px",
            color: rButtton[1],
            backgroundColor: rButtton[0],
            padding: "4px 15px 4px 15px",
            marginLeft:"20px",
            borderRadius: "20px",
          }}
          to="/Rentals"
        >
          Rentals
        </Link>
      </div>
    </div>
  );
}
