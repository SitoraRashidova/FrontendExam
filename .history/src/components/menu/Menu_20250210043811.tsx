import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for menu toggle

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container max-w-[1170px] mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-red-500">
          MyStore
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="hover:text-red-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-red-500">
              Products
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-red-500">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/wishlist" className="hover:text-red-500">
              Wishlist
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-lg p-4 space-y-3">
          <li>
            <Link
              to="/"
              className="block py-2 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="block py-2 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="block py-2 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="/wishlist"
              className="block py-2 hover:text-red-500"
              onClick={() => setIsOpen(false)}
            >
              Wishlist
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};
