import "./App.css";
import {Navigation} from "./Components";
import {Cart, Login, Catalogue, LandingPage, Wishlist} from './pages';
import {Routes, Route} from "react-router-dom";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/catalogue" element={<Catalogue/>}/>
        <Route path="/mock" element={Mockman} endpointsList={["/api-todos", "/api/auth/signup", "/api/auth/login"]}/>
      </Routes>
    </div>
  );
}

export default App;
