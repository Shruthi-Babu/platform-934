import "./App.css";
import {Navigation, Login, Cart, Wishlist, Catalogue, LandingPage, Content, Footer} from "./Components";
import {Routes, Route} from "react-router-dom"

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
      </Routes>
    </div>
  );
}

export default App;
