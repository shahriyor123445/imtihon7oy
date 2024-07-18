import React from 'react'
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { BiLogoFacebookCircle } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="bg-green-900 mt-[100px]">
      <div className="container mx-auto flex justify-between pt-[77px] border    border-gray-900 border-r-0 border-l-0 border-t-0">
        <div className="animate-slideInLeft">
          <h1 className="text-white w-[8px] text-[30px] mb-[17px]">
            Game Geek
          </h1>
          <h3 className="w-[270px] text-[22px] mb-[157px] text-slate-400 animate-slideInBottom">
            START YOUR GAME WITH THE BEST
          </h3>
          <div className="flex gap-[22px] pb-[63px]">
            <a href="https://twitter.com/" target="_blank">
              <IoLogoTwitter className="w-[30px] h-[30px]" />
            </a>
            <a href="https://uz.linkedin.com/ " target="_blank">
              <FaLinkedinIn className="w-[30px] h-[30px]" />
            </a>
            <a href="https://www.facebook.com/ " target="_blank">
              <BiLogoFacebookCircle className="w-[30px] h-[30px]" />
            </a>
            <a href="https://www.instagram.com/  " target="_blank">
              <IoLogoInstagram className="w-[30px] h-[30px]" />
            </a>
          </div>
        </div>
        <div className="flex justify-between w-[50%]">
          <div className="animate-slideInLeft">
            <h2 className="text-white font-bold text-[24px] mb-[30px]">
              Services
            </h2>
            <h3 className="mb-[19px] text-slate-300">Gift Card</h3>
            <h3 className="mb-[19px] text-slate-300">Mobile App</h3>
            <h3 className="mb-[19px] text-slate-300">Shipping & Delivery</h3>
            <h3 className="mb-[19px] text-slate-300">Order Pickup</h3>
            <h3 className="mb-[19px] text-slate-300">Account Signup</h3>
          </div>
          <div className="animate-slideInBottom">
            <h2 className="text-white font-bold text-[24px] mb-[30px]">
              {" "}
              Help
            </h2>
            <h3 className="mb-[19px] text-slate-300">ShopCart Help</h3>
            <h3 className="mb-[19px] text-slate-300">Returns</h3>
            <h3 className="mb-[19px] text-slate-300">Track Orders</h3>
            <h3 className="mb-[19px] text-slate-300">Contact Us</h3>
            <h3 className="mb-[19px] text-slate-300">Feedback</h3>
            <h3 className="mb-[19px] text-slate-300">Security & Fraud</h3>
          </div>
          <div className="animate-slideInRight">
            <h2 className="text-white font-bold text-[24px] mb-[30px]">
              About Us
            </h2>
            <h3 className="mb-[19px] text-slate-300">News & Blog</h3>
            <h3 className="mb-[19px] text-slate-300">Help</h3>
            <h3 className="mb-[19px] text-slate-300">Press Center</h3>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-between mt-[30px] text-white font-bold text-[28px] pb-[40px] animate-slideInBottom">
        <h1>GG</h1>
        <h2>Help Center</h2>
        <h2>Privacy & Policy</h2>
        <h2>Terms of Service</h2>
        <h2>All rights reserved by GameGeek | 2023</h2>
      </div>
    </div>
  );
}

export default Footer