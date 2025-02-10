import { Header } from "./header";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";
import { Navbar } from "../components/navbar/Navbar";
export const MainLayout = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Header />
          <Outlet />
        </div>
        <Footer />
      </div>
    );
}