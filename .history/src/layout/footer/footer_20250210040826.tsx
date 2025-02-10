import { Link } from "react-router-dom";
import Logo from "../../assets/images/Exclusive.svg";
import Image from "../../assets/images/qr-kod.png";
import { FacebookIcon } from "../../assets/icons/facebook-icon";
import { TwitterIcon } from "../../assets/icons/twitter-icon";
import { InstagramIcon } from "../../assets/icons/instagram-icon";
import { InIcon } from "../../assets/icons/in-icon";

export const Footer = () => {
  return (
    <footer className="bg-[#000]">
      <div className="pt-[40px] sm:pt-[60px] lg:pt-[80px] pb-[30px] sm:pb-[40px] lg:pb-[60px] border-b-[1px] border-b-[#141414]">
        <div className="container max-w-[1170px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between gap-8">
            <div className="w-full sm:w-[calc(50%-16px)] lg:w-[217px]">
              <Link to={"/"}>
                <img
                  src={Logo || "/placeholder.svg"}
                  alt="logo"
                  className="mb-4 sm:mb-0"
                />
              </Link>
              <a
                className="font-medium text-[18px] sm:text-[20px] text-[#fff] block my-[16px] sm:my-[24px]"
                href="#"
              >
                Subscribe
              </a>
              <p className="font-normal text-[14px] sm:text-[16px] text-[#fff] mb-[12px] sm:mb-[16px]">
                Get 10% off your first order
              </p>
              <input
                className="w-full rounded-[4px] border-[1px] border-[#fff] bg-transparent py-[10px] sm:py-[12px] px-[12px] sm:px-[16px] placeholder:text-[#575757] text-[#fff] text-[14px] sm:text-[16px]"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="w-full sm:w-[calc(50%-16px)] lg:w-[175px]">
              <a
                className="font-medium text-[18px] sm:text-[20px] text-[#fff] block mb-[16px] sm:mb-[24px]"
                href="#"
              >
                Support
              </a>
              <a
                className="font-normal text-[14px] sm:text-[16px] text-[#fff] block mb-[12px] sm:mb-[16px]"
                href="#"
              >
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </a>
              <a
                className="font-normal text-[14px] sm:text-[16px] text-[#fff] block mb-[12px] sm:mb-[16px]"
                href="#"
              >
                exclusive@gmail.com
              </a>
              <a
                className="font-normal text-[14px] sm:text-[16px] text-[#fff] block"
                href="#"
              >
                +88015-88888-9999
              </a>
            </div>
            <div className="w-full sm:w-[calc(50%-16px)] lg:w-auto">
              <a
                className="font-medium text-[18px] sm:text-[20px] text-[#fff] block mb-[16px] sm:mb-[24px]"
                href="#"
              >
                Account
              </a>
              <a
                className="font-normal text-[14px] sm:text-[16px] text-[#fff] block mb-[12px] sm:mb-[16px]"
                href="#"
              >
                My Account
              </a>
              <a
                className="font-normal text-[14px] sm:text-[16px] text-[#fff] block mb-[12px] sm:mb-[16px]"
                href="#"
              >
                Login / Register
              </a>
              <a
                className="font-normal text-[14px] sm:text-[16px] text-[#fff] block mb-[12px] sm:mb-[16px]"
                href="#"
              >
                Cart
              </a>
              <a
                className="font-normal text-[14px] sm:text-[16px] text-[#fff] block mb-[12px] sm:mb-[16px]"
                href="#"
              >
                Wishlist
              </a>
              <a
                className="font-normal text-[14px] sm:text-[16px] text-[#fff] block"
                href="#"
              >
                Shop
              </a>
            </div>
            <div className="w-full sm:w-[calc(50%-16px)] lg:w-auto">
              <a
                className="font-medium text-[18px] sm:text-[20px] text-[#fff] block mb-[16px] sm:mb-[24px]"
                href="#"
              >
                Quick Link
              </a>
              <a
                className="font-normal text-[14px] sm:text-[16px] text-[#fff] block mb-[12px] sm:mb-[16px]"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="font-normal text-[14px] sm:text-[16px] text-[#fff] block mb-[12px] sm:mb-[16px]"
                href="#"
              >
                Terms Of Use
              </a>
              <a
                className="font-normal text-[14px] sm:text-[16px] text-[#fff] block mb-[12px] sm:mb-[16px]"
                href="#"
              >
                FAQ
              </a>
              <a
                className="font-normal text-[14px] sm:text-[16px] text-[#fff] block"
                href="#"
              >
                Contact
              </a>
            </div>
            <div className="w-full sm:w-[calc(50%-16px)] lg:w-auto">
              <a
                className="font-medium text-[18px] sm:text-[20px] text-[#fff] block mb-[16px] sm:mb-[24px]"
                href="#"
              >
                Download App
              </a>
              <p className="font-medium text-[11px] sm:text-[12px] text-[#fafafa] mb-[8px]">
                Save $3 with App New User Only
              </p>
              <img
                className="mb-[16px] sm:mb-[24px] max-w-full h-auto"
                src={Image || "/placeholder.svg"}
                alt="QR Code"
              />
              <div className="flex items-center gap-[16px] sm:gap-[24px]">
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <TwitterIcon />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <InIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[16px] sm:py-[20px] lg:py-[24px]">
        <p className="text-center font-normal text-[14px] sm:text-[16px] text-[#575757]">
          Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
};
