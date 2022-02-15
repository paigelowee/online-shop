import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Login from "./entry/Login";
import Register from "./entry/Register";
import Home from "./Home";
import Products from "./Products/Products";
import Product from "./Products/Product";
import Basket from "./Basket";
import WithoutNav from "./lib/WithoutNav";
import WithNav from "./lib/WithNav";

function App() {
  return (
    <>
      <ToastContainer />
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
    </>
  );
}

export default App;
