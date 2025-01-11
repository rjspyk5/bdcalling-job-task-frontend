import { Route, Routes } from "react-router";
import { RootLayout } from "./layout/RootLayout";
import { Registration } from "./pages/Registration/Registration";
import { Home } from "./pages/Home/Home";
import { OurProducts } from "./components/OurProducts/OurProducts";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
export const Routing = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<OurProducts />} />
      </Route>
      <Route path="/reg" element={<Registration />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
