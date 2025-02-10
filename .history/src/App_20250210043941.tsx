import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { Home } from "./pages/home";
import { ProductDetail } from "./pages/product-detail";
import { Wishlist } from "./pages/wishlist";
import { Login } from "./pages/login";
import { Profile } from "./pages/profile";
import { ProtectedRoute } from "./components/protected-route"; 
import { NotFound } from "./pages/not-found";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="login" element={<Login />} />
        <Route path="product-detail/:id" element={<ProductDetail />} />

        <Route element={<ProtectedRoute />}>
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  );
}

export default App;
