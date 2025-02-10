import { Header } from "./header";
import { Outlet } from "react-router-dom";
import { Footer } from "./footer";

export const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <Header />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}