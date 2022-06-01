import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Cart } from "./pages/Cart";
import { Cart2 } from "./pages/Cart2";
import { Catalog } from "./pages/Catalog";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Catalog />} />
        <Route path="/cart" element={<Cart2 />} />
      </Routes>
    </Router>
  );
}
