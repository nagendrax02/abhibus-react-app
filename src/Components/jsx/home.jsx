import Train from "./Train";
import Bus from "./Bus";
import Hotel from "./Hotels";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Link";
import { Header } from "./Header";
import {Footer} from "./Footer"

import App from "./firebase"
//
export default function Home() {
  return (
    <>
      {" "}
      <div >
      <Header />
      <Navbar />
      <Switch>
    
        <Route exact path="/"><Bus/></Route>
        <Route path="/Trains">
        <Train />
        </Route>
        <Route path="/Hotels"><Hotel/></Route>
        <Route path="/Rentals"> </Route>

        {/* <Route exact path="/users"></Route>

        <Route path="/users/:id"></Route>
        <Route path="/others">This is others page</Route> */}
        <Route>404 page not found</Route>
      </Switch>
      <Footer/>
      </div>
    </>
  );
}
