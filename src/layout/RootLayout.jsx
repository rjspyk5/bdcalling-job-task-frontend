import { Navbar } from "../components/Shared/Navbar";
import { Outlet } from "react-router";
import { Footer } from "../components/Shared/Footer";

export const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
