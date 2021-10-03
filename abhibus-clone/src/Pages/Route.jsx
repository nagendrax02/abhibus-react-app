import { Route, Switch } from "react-router"
import { Offers } from "./Offers"
import { Header } from "../components/jsx/Header";
import {Footer} from "../components/jsx/Footer"
import  Home  from "../components/jsx/home"
import Train from "../components/jsx/Train";
import Bus from "../components/jsx/Bus";
import Navbar from "../components/jsx/Link";
import Hotel from "../components/jsx/Hotels";
import Rental from "../components/jsx/Rental";
export const  Router = ()=>{
    return <>
      <Header />
      <Navbar />
      <Switch>
    
        <Route exact path="/"><Bus/></Route>
        <Route path="/Trains">
        <Train />
        </Route>
        <Route path="/Hotels"><Hotel/></Route>
        <Route path="/Rentals"><Rental/> </Route>
        <Route   path='/offers'> <Offers></Offers></Route>
        {/* <Route exact path="/users"></Route>

        <Route path="/users/:id"></Route>
        <Route path="/others">This is others page</Route> */}
        <Route>404 page not found</Route>
      </Switch>
      <Footer/>
    {/* <Switch>
        <Route path='/' exact> <Home></Home> </Route>
       
        <Route>Page not found</Route>
    </Switch> */}
    </>
}

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
