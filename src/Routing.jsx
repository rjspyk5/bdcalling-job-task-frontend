import { Route, Routes } from "react-router";
import App from "./App";
import { RootLayout } from "./layout/RootLayout";
import { DashboardLayout } from "./layout/DashboardLayout";
import { Registration } from "./pages/Registration/Registration";

export const Routing = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<App />} />
      </Route>
      <Route path="/reg" element={<Registration />} />
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<App />} />
      </Route>
    </Routes>
  );
};
