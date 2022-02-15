import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./entry/Login";
import Register from "./entry/Register";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Products from "./Products/Products";
import Product from "./Products/Product";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
