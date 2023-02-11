import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppNavbar from "./components/AppNavbar";
import Home from "./pages/Home";
import ShopHome from "./pages/ShopHome";
import CartPage from "./pages/CartPage";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop-home" element={<ShopHome />} />
        <Route path="/cart-page" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
