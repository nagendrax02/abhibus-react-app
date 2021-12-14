import { Route, Switch } from "react-router";
import { Link, useLocation } from "react-router-dom";
import { Offers } from "./Offers";
import { Header } from "../components/jsx/Header";
import { Footer } from "../components/jsx/Footer";
import Home from "../components/jsx/home";
import Train from "../components/jsx/Train";
import Bus from "../components/jsx/Bus.jsx";
import Navbar from "../components/jsx/Link";
import Hotel from "../components/jsx/Hotels";
import Rental from "../components/jsx/Rental";
import {Payment} from "../components/jsx/Payment"
import { HotelList } from "../components/jsx/HotelList";
import Pay from "../components/jsx/payment_successful"
export const Router = () => {
  let location = useLocation();
  var t = "block";
  if (location.pathname === "/Hotel") {
    t = "none";
  }

  var p=location.pathname.split("/")
 for(var i=0; i<p.length; i++){
   if(p[i]==="Payment"){
    t = "none";
   }
 }
  return (
    <>
      <Header />
      <Navbar value={t} />
      <Switch>
        <Route exact path="/">
          <Bus />
        </Route>
        <Route path="/Trains">
          <Train />
        </Route>
        <Route path="/Hotels">
          <Hotel />
        </Route>
        <Route path="/Rentals">
          <Rental />{" "}
        </Route>
        <Route path="/offers">
          {" "}
          <Offers></Offers>
        </Route>
        {/* <Route exact path="/users"></Route>

        <Route path="/users/:id"></Route>
        <Route path="/others">This is others page</Route> */}
        <Route path="/Hotel">
          {" "}
          <HotelList></HotelList>
        </Route>
        <Route path="/Payment">
          {" "}
          <Payment/>
        </Route>
        <Route path="/paymentSuccessful">
          {" "}
          <Pay/>
        </Route>
       
        <Route>404 page not found</Route>
      </Switch>
      <Footer />
      {/* <Switch>
        <Route path='/' exact> <Home></Home> </Route>
        <Route>Page not found</Route>
    </Switch> */}
    </>
  );
};

// import Train from "../jsx/Train";
// import Bus from "../jsx/Bus";
// import Hotel from "../jsx/Hotels";
// import { Route, Switch } from "react-router-dom";
// import Navbar from "../jsx/Link";
// import { Header } from "./Header";
// import {Footer} from "./Footer"

// import App from "./firebase"
//
// export default function Home() {
//   return (
//     <>
//       {" "}
//       <div >
//       <Header />
//       <Navbar />
//       <Switch>

//         <Route exact path="/"><Bus/></Route>
//         <Route path="/Trains">
//         <Train />
//         </Route>
//         <Route path="/Hotels"><Hotel/></Route>
//         <Route path="/Rentals"> </Route>

//         {/* <Route exact path="/users"></Route>

//         <Route path="/users/:id"></Route>
//         <Route path="/others">This is others page</Route> */}
//         <Route>404 page not found</Route>
//       </Switch>
//       <Footer/>
//       </div>
//     </>
//   );
// }
