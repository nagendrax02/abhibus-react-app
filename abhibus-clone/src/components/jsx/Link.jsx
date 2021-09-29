import { Link ,useLocation} from "react-router-dom";
import { useState } from "react";
import Train from "./Train";
export default function Navbar() {
  const location=useLocation()
 
  const [trainBut, setTrainBut] = useState(["white","black"]);
  const [bButtton, setBButtton] = useState(["red","white"]);
  const [hButtton, setHButtton] = useState(["white","black"]);
  const [rButtton, setRButtton] = useState(["white","black"]);
  // if(  location.pathname==="/Trains"){
  //   setTrainBut(["red","white"]);
  // }  if(  location.pathname===""){
  //   setBButtton(["red","white"]);
  // }
  // if(  location.pathname==="/Train"){
  //   setTrainBut(["red","white"]);
  // }
  // if(  location.pathname==="/Train"){
  //   setTrainBut(["red","white"]);
  // }


  return (
    <div>
      <div
        style={{
          width: "30%",
          margin: "auto",
          height: "60px",
          marginTop: "80px",
        }}
      >
        <Link
          onClick={() => {
            setBButtton(["red","white"]);
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
            setTrainBut(["red","white"]);
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
            setHButtton(["red","white"]);
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
            setRButtton(["red","white"]);
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
