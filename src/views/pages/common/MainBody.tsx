import Home from "@pages/home/Home";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Login = React.lazy(() => import("@pages/login/Login"));
const SingleProduct = React.lazy(
  () => import("@pages/singleProduct/SingleProduct")
);
const Cart = React.lazy(() => import("@pages/cart/Cart"));

const MainBody = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Suspense>
  );
};

export default MainBody;
