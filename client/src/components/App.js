import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./entry/Login";
import Register from "./entry/Register";
import Home from "./Home";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
