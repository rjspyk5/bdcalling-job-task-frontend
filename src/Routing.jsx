import { Route, Routes } from "react-router";
import { RootLayout } from "./layout/RootLayout";

import { Home } from "./pages/Home/Home";
import { OurProducts } from "./components/OurProducts/OurProducts";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { ProductDetails } from "./pages/ProdcutDetails/ProductDetails";
export const Routing = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<OurProducts />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
