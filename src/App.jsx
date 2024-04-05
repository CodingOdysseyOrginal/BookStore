import Navbar from "./Components/Navbar";
import Fiction from "./Components/Fiction";
import Adventure from "./Components/Adventure";
import NonFiction from "./Components/Non-fiction";
import Bestsellers from "./Components/Bestsellers";
import GiftCards from "./Components/GiftCard";
import Header from "./Components/Header";
import Cart from "./Components/Cart"; 

import { Route, Routes } from "react-router-dom";
import { ShopcontextProvider } from "./Components/ShopContext";
import About from "./Components/About";

function App() {
  return (
    <ShopcontextProvider>
      <Navbar />
      <Routes>
        <Route path="/BookStore" element={<Header />} />
        <Route path="/fiction" element={<Fiction />} />
        <Route path="/adventure" element={<Adventure />} />
        <Route path="/nonfiction" element={<NonFiction />} />
        <Route path="/bestsellers" element={<Bestsellers />} />
        <Route path="/about/:id" element={<About />} />
        <Route path="/giftcards" element={<GiftCards />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </ShopcontextProvider>
  );
}

export default App;
