import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./entry/Login";
import Register from "./entry/Register";
import Footer from "./Footer";
import Home from "./Home";
import Navbar from "./Navbar";
import Products from "./Products/Products";
import Product from "./Products/Product";
import Basket from "./Basket";
import WithoutNav from "./WithoutNav";
import WithNav from "./WithNav";

function App() {
  return (
    <Routes>
      <Route element={<WithoutNav />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<WithNav />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/basket" element={<Basket />} />
      </Route>
    </Routes>
  );
}

export default App;
