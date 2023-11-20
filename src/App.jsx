import React from "react";
import Home from "./screens/HomeScreen";
import { Route, Routes } from "react-router-dom";
import ContactScreen from "./screens/ContactScreen";
import AboutUs from "./screens/AboutScreen";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default App;
