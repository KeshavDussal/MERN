import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Attractions from "./components/Attractions";
import Restaurants from "./components/Restaurants";
import AttractionDetail from "./components/AttractionDetail";
import RestaurantDetail from "./components/RestaurantDetail";
import ImageCarousel from "./components/slider";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="image-carousel" element={<ImageCarousel />} />
          <Route path="attractions" element={<Attractions />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="attractions/:id" element={<AttractionDetail />} />
          <Route path="restaurants/:id" element={<RestaurantDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
