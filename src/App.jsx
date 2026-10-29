
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Stores from "./pages/Stores.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
