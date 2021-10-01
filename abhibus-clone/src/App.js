
import "./App.css";
import Home from "./components/jsx/home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Checkout } from "./components/jsx/Checkout";
import { HotelList } from "./components/jsx/HotelList";
function App() {
  return (
    <div className="App">
      {/* <Home /> */}
    {/* <Checkout></Checkout> */}
    <HotelList></HotelList>
    </div>
  );
}

export default App;
