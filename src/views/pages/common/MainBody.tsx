import Home from "@pages/home/Home";
import SingleProduct from "@pages/singleProduct/SingleProduct";
import { Route, Routes } from "react-router-dom";

const MainBody = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<SingleProduct />} />
    </Routes>
  );
};

export default MainBody;
