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
      <div className="pt-[40px] md:pt-[60px] lg:pt-[80px] pb-[30px] md:pb-[45px] lg:pb-[60px] border-b-[1px] border-b-[#141414]">
        <div className="container max-w-[1170px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap items-start justify-between gap-8 md:gap-6 lg:gap-4">
            <div className="w-full md:w-[45%] lg:w-[217px]">
              <Link to={"/"}>
                <img src={Logo || "/placeholder.svg"} alt="logo" className="mb-4 md:mb-6" />
              </Link>
              <a
                className="font-medium text-[18px] md:text-[20px] text-[#fff] block my-[16px] md:my-[20px] lg:my-[24px]"
                href="#"
              >
                Subscribe
              </a>
              <p className="font-normal text-[14px] md:text-[16px] text-[#fff] mb-[12px] md:mb-[16px]">
                Get 10% off your first order
              </p>
              <input
                className="w-full md:w-auto rounded-[4px] border-[1px] border-[#fff] bg-transparent py-[10px] md:py-[12px] px-[12px] md:px-[16px] placeholder:text-[#575757] text-[#fff] text-[14px] md:text-[16px]"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="w-full md:w-[45%] lg:w-[175px]">
              <a
                className="font-medium text-[18px] md:text-[20px] text-[#fff] block mb-[16px] md:mb-[20px] lg:mb-[24px]"
                href="#"
              >
                Subscribe
              </a>
              <a className="font-normal text-[14px] md:text-[16px] text-[#fff] block mb-[12px] md:mb-[16px]" href="#">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </a>
              <a className="font-normal text-[14px] md:text-[16px] text-[#fff] block mb-[12px] md:mb-[16px]" href="#">
                exclusive@gmail.com
              </a>
              <a className="font-normal text-[14px] md:text-[16px] text-[#fff] block" href="#">
                +88015-88888-9999
              </a>
            </div>
            <div className="w-full md:w-[45%] lg:w-auto">
              <a
                className="font-medium text-[18px] md:text-[20px] text-[#fff] block mb-[16px] md:mb-[20px] lg:mb-[24px]"
                href="#"
              >
                Account
              </a>
              <a className="font-normal text-[14px] md:text-[16px] text-[#fff] block mb-[12px] md:mb-[16px]" href="#">
                My Account
              </a>
              <a className="font-normal text-[14px] md:text-[16px] text-[#fff] block mb-[12px] md:mb-[16px]" href="#">
                Login / Register
              </a>
              <a className="font-normal text-[14px] md:text-[16px] text-[#fff] block mb-[12px] md:mb-[16px]" href="#">
                Cart
              </a>
              <a className="font-normal text-[14px] md:text-[16px] text-[#fff] block mb-[12px] md:mb-[16px]" href="#">
                Wishlist
              </a>
              <a className="font-normal text-[14px] md:text-[16px] text-[#fff] block" href="#">
                Shop
              </a>
            </div>
            <div className="w-full md:w-[45%] lg:w-auto">
              <a
                className="font-medium text-[18px] md:text-[20px] text-[#fff] block mb-[16px] md:mb-[20px] lg:mb-[24px]"
                href="#"
              >
                Quick Link
              </a>
              <a className="font-normal text-[14px] md:text-[16px] text-[#fff] block mb-[12px] md:mb-[16px]" href="#">
                Privacy Policy
              </a>
              <a className="font-normal text-[14px] md:text-[16px] text-[#fff] block mb-[12px] md:mb-[16px]" href="#">
                Terms Of Use
              </a>
              <a className="font-normal text-[14px] md:text-[16px] text-[#fff] block mb-[12px] md:mb-[16px]" href="#">
                FAQ
              </a>
              <a className="font-normal text-[14px] md:text-[16px] text-[#fff] block" href="#">
                Contact
              </a>
            </div>
            <div className="w-full md:w-full lg:w-auto">
              <a
                className="font-medium text-[18px] md:text-[20px] text-[#fff] block mb-[16px] md:mb-[20px] lg:mb-[24px]"
                href="#"
              >
                Download App
              </a>
              <p className="font-medium text-[11px] md:text-[12px] text-[#fafafa] mb-[6px] md:mb-[8px]">
                Save $3 with App New User Only
              </p>
              <img
                className="mb-[16px] md:mb-[20px] lg:mb-[24px] max-w-[150px] md:max-w-none"
                src={Image || "/placeholder.svg"}
                alt="image"
              />
              <div className="flex items-center gap-[16px] md:gap-[20px] lg:gap-[24px]">
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
      <div className="pt-[12px] md:pt-[14px] lg:pt-[16px] pb-[20px] md:pb-[22px] lg:pb-[24px]">
        <p className="text-center font-normal text-[14px] md:text-[16px] text-[#575757]">
          Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  )
}

