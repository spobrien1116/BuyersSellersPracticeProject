import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ShopHome from "./pages/ShopHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ShopHome" element={<ShopHome />} />
      </Routes>
    </Router>
  );
}

export default App;
