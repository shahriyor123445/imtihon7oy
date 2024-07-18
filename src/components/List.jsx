import React from "react";
import GG from "../assets/GG.svg";
import icon from "../assets/icon.svg";
import { MdPhoneCallback } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";

const List = () => {
  return (
    <div className="bg-black">
      <div className="flex justify-between container mx-auto px-4 items-center">
        <div className="flex items-center pt-[25px] pb-[25px] ">
          <img className="w-[48px] h-[30px]" src={GG} alt="GG Logo" />
          <MdPhoneCallback className="text-white ml-[32px] mr-[17px] w-[48px] h-[30px]" />
          <p className="text-white">+4904-049-950</p>
        </div>
        <div className="flex items-center pt-[25px] pb-[25px]">
          <p className="text-white">Get 50% Off on the Selected items</p>
          <p className="text-green-600 mx-[25px]">|</p>
          <p className="text-white">Shop now</p>
        </div>
        <div className="flex items-center pt-[25px] pb-[25px]">
          <p className="text-white flex items-center">
            <AiOutlineDown className="mr-[11px] h-[25px] w-[40px]" />
            English
            <img
              className="ml-[11px] w-[25px] h-[25px]"
              src={icon}
              alt="Icon"
              width={21}
              height={19}
            />
          </p>
          <p className="text-white flex items-center ml-[44px]">
            <GrLanguage className="mr-[10px] " />
            Location
          </p>
        </div>
      </div>
    </div>
  );
};

export default List;
