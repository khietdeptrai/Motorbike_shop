import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header, Home, Footer } from "./components/index";
import {
  About,
  Register,
  Login,
  Shopping,
  Cart,
  Thongtincanhan,
  Quanlykhachhang,
  Quanlysanpham,
  Contact,
} from "./page/index";

import { useState } from "react";
//App 
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/homepage" />} />
        <Route path="homepage" element={<Home />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/thongtincanhan" element={<Thongtincanhan />} />
        <Route path="/quanlykhachhang" element={<Quanlykhachhang />} />
        <Route path="/quanlysanpham" element={<Quanlysanpham />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
