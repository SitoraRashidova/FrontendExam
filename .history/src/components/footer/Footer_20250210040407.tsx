import { Link } from "react-router-dom"
import Logo from "../../assets/images/Exclusive.svg"
import Image from "../../assets/images/qr-kod.png"
import { FacebookIcon } from "../../assets/icons/facebook-icon"
import { TwitterIcon } from "../../assets/icons/twitter-icon"
import { InstagramIcon } from "../../assets/icons/instagram-icon"
import { InIcon } from "../../assets/icons/in-icon"

export const Footer = () => {
  return (
    <footer className="bg-[#000]">
      <div className="pt-[80px] pb-[60px] border-b-[1px] border-b-[#141414]">
        <div className="container max-w-[1170px] mx-auto">
          <div className="flex items-start justify-between">
            <div className="w-[217px]">
              <Link to={"/"}>
                <img src={Logo} alt="logo" />
              </Link>
              <a
                className="font-medium text-[20px] text-[#fff] block my-[24px]"
                href="#"
              >
                Subscribe
              </a>
              <p className="font-normal text-[16px] text-[#fff] mb-[16px]">
                Get 10% off your first order
              </p>
              <input
                className="rounded-[4px] border-[1px] border-[#fff] bg-transparent py-[12px] px-[16px] placeholder:text-[#575757] text-[#fff]"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="w-[175px]">
              <a
                className="font-medium text-[20px] text-[#fff] block mb-[24px]"
                href="#"
              >
                Subscribe
              </a>
              <a
                className="font-normal text-[16px] text-[#fff] block mb-[16px]"
                href="#"
              >
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </a>
              <a
                className="font-normal text-[16px] text-[#fff] block mb-[16px]"
                href="#"
              >
                exclusive@gmail.com
              </a>
              <a className="font-normal text-[16px] text-[#fff] block" href="#">
                +88015-88888-9999
              </a>
            </div>
            <div>
              <a
                className="font-medium text-[20px] text-[#fff] block mb-[24px]"
                href="#"
              >
                Account
              </a>
              <a
                className="font-normal text-[16px] text-[#fff] block mb-[16px]"
                href="#"
              >
                My Account
              </a>
              <a
                className="font-normal text-[16px] text-[#fff] block mb-[16px]"
                href="#"
              >
                Login / Register
              </a>
              <a
                className="font-normal text-[16px] text-[#fff] block mb-[16px]"
                href="#"
              >
                Cart
              </a>
              <a
                className="font-normal text-[16px] text-[#fff] block mb-[16px]"
                href="#"
              >
                Wishlist
              </a>
              <a className="font-normal text-[16px] text-[#fff] block" href="#">
                Shop
              </a>
            </div>
            <div>
              <a
                className="font-medium text-[20px] text-[#fff] block mb-[24px]"
                href="#"
              >
                Quick Link
              </a>
              <a
                className="font-normal text-[16px] text-[#fff] block mb-[16px]"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="font-normal text-[16px] text-[#fff] block mb-[16px]"
                href="#"
              >
                Terms Of Use
              </a>
              <a
                className="font-normal text-[16px] text-[#fff] block mb-[16px]"
                href="#"
              >
                FAQ
              </a>
              <a className="font-normal text-[16px] text-[#fff] block" href="#">
                Contact
              </a>
            </div>
            <div>
              <a
                className="font-medium text-[20px] text-[#fff] block mb-[24px]"
                href="#"
              >
                Download App
              </a>
              <p className="font-medium text-[12px] text-[#fafafa] mb-[8px]">
                Save $3 with App New User Only
              </p>
              <img className="mb-[24px]" src={Image} alt="image" />
              <div className="flex items-center gap-[24px]">
                <a href="#">
                  <FacebookIcon />
                </a>
                <a href="#">
                  <TwitterIcon />
                </a>
                <a href="#">
                  <InstagramIcon />
                </a>
                <a href="#">
                  <InIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[16px] pb-[24px]">
        <p className="text-center font-normal text-[16px] text-[#575757]">
          Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
}
