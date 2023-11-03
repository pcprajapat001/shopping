import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";
import Product from "./Product";

import Cart1 from "./Cart1";
import ProductAss from "./ProductAss";

const Landing = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Nav />} /> */}
        <Route path="/" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Landing;
