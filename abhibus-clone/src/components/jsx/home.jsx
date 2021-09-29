import Train from "../jsx/Train";
import { Route, Switch } from "react-router-dom";
import Navbar from "../jsx/Link";
import { Header } from "./Header";
import { Footer } from "./Footer";
export default function Home() {
  return (
    <>
      {" "}
      <Header />
      <Navbar />
      <Switch>
     
        <Route exact path="/"></Route>
        <Route path="/Trains">
        <Train />
        </Route>
        <Route path="/Hotels">This is countact page</Route>
        <Route path="/Rentals"> </Route>

        {/* <Route exact path="/users"></Route>

        <Route path="/users/:id"></Route>
        <Route path="/others">This is others page</Route> */}
        <Route>404 page not found</Route>
      </Switch>
      <Footer/>
    </>
  );
}
