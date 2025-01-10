import { Route, Routes } from "react-router";
import { RootLayout } from "./layout/RootLayout";
import { Registration } from "./pages/Registration/Registration";
import { Home } from "./pages/Home/Home";

export const Routing = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/reg" element={<Registration />} />
    </Routes>
  );
};
