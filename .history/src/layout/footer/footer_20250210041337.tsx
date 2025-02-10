import Link from "next/link";
import Image from "next/image";
import { FacebookIcon } from "@/components/ui/icons/facebook-icon";
import { TwitterIcon } from "@/components/ui/icons/twitter-icon";
import { InstagramIcon } from "@/components/ui/icons/instagram-icon";
import { LinkedInIcon } from "@/components/ui/icons/linkedin-icon";

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 border-b border-[#141414]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/Exclusive.svg"
                alt="Exclusive Logo"
                width={118}
                height={24}
              />
            </Link>
            <h3 className="text-xl font-medium">Subscribe</h3>
            <p className="text-sm">Get 10% off your first order</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-2 px-3 bg-transparent border border-white rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Support</h3>
            <address className="not-italic text-sm">
              111 Bijoy sarani, Dhaka,
              <br />
              DH 1515, Bangladesh.
            </address>
            <p className="text-sm">exclusive@gmail.com</p>
            <p className="text-sm">+88015-88888-9999</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Account</h3>
            <nav className="space-y-2">
              <Link href="/account" className="block text-sm hover:underline">
                My Account
              </Link>
              <Link href="/login" className="block text-sm hover:underline">
                Login / Register
              </Link>
              <Link href="/cart" className="block text-sm hover:underline">
                Cart
              </Link>
              <Link href="/wishlist" className="block text-sm hover:underline">
                Wishlist
              </Link>
              <Link href="/shop" className="block text-sm hover:underline">
                Shop
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Quick Link</h3>
            <nav className="space-y-2">
              <Link
                href="/privacy-policy"
                className="block text-sm hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-use"
                className="block text-sm hover:underline"
              >
                Terms Of Use
              </Link>
              <Link href="/faq" className="block text-sm hover:underline">
                FAQ
              </Link>
              <Link href="/contact" className="block text-sm hover:underline">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium">Download App</h3>
            <p className="text-xs font-medium text-gray-300">
              Save $3 with App New User Only
            </p>
            <div className="flex space-x-4">
              <Image
                src="/images/qr-code.png"
                alt="QR Code"
                width={76}
                height={76}
              />
              <div className="flex flex-col justify-between">
                <Image
                  src="/images/app-store.png"
                  alt="App Store"
                  width={110}
                  height={32}
                />
                <Image
                  src="/images/google-play.png"
                  alt="Google Play"
                  width={110}
                  height={32}
                />
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <LinkedInIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-6">
        <p className="text-center text-sm text-gray-500">
          &copy; Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
}
