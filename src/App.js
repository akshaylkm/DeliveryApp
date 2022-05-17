import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
    <Fragment>
      <Routes>
      <Route path="/DeliveryApp" element={<Home/>}/>
      <Route path="" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </Fragment>
    </Router>
  );
}

export default App;
