import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Shop from "./Components/Shop/Shop";
import Review from "./Components/Review/Review";
import Inventory from "./Components/Inventory/Inventory";
import NotFound from "./Components/NotFound/NotFound";
import ProductDetail from "./Components/ProductDetail/ProductDetail";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/shop" element={<Shop />} />
          <Route path="/review" element={<Review />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/" element={<Shop />} />
          <Route path="/product/:productKey" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
