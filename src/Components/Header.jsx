import React from "react";
import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <div className="w-[1440px] h-[60px] bg-white shadow-[0px_4px_24px_#0000000d]">
      <div className="relative w-[1170px] h-[41px] top-2 left-[135px]">
        {/* Navigation Menu */}
        <div className="absolute w-[470px] h-4 top-[13px] left-[526px]">
          {/* Each nav item has hover underline with red color and offset */}
          <div className="absolute top-0 left-0 font-roboto font-bold text-[#222222] text-sm tracking-[0] leading-[normal] whitespace-nowrap hover:underline hover:decoration-red hover:underline-offset-8 hover:decoration-3">
            Home
          </div>

          <div className="absolute top-0 left-[75px] font-roboto font-medium text-[#222222] text-sm tracking-[0] leading-[normal] whitespace-nowrap hover:underline hover:decoration-red hover:underline-offset-8 hover:decoration-3">
            About us
          </div>

          <div className="absolute top-0 left-[169px] font-roboto font-medium text-[#222222] text-sm tracking-[0] leading-[normal] whitespace-nowrap hover:underline hover:decoration-red hover:underline-offset-8 hover:decoration-3">
            Services
          </div>

          <div className="absolute top-0 left-[253px] font-roboto font-medium text-[#222222] text-sm tracking-[0] leading-[normal] whitespace-nowrap hover:underline hover:decoration-red hover:underline-offset-8 hover:decoration-3">
            Project
          </div>

          <div className="absolute top-0 left-[335px] font-roboto font-medium text-[#222222] text-sm tracking-[0] leading-[normal] whitespace-nowrap hover:underline hover:decoration-red hover:underline-offset-8 hover:decoration-3">
            Blogs
          </div>

          <div className="absolute top-0 left-[408px] font-roboto font-medium text-[#222222] text-sm tracking-[0] leading-[normal] whitespace-nowrap hover:underline hover:decoration-red hover:underline-offset-8 hover:decoration-3">
            Contact
          </div>
        </div>

        {/* Logo Section */}
        <div className="absolute w-[165px] h-[41px] top-0 left-0">
          <img src={logo} alt="logo" />
        </div>

        {/* Call Back Button */}
        <button className="all-[unset] box-border absolute w-[148px] h-9 top-[3px] left-[1024px]">
          <div className="relative w-[146px] h-9 bg-[#dd3142] rounded-[5px]">
            <div className="absolute top-3 left-[9px] font-roboto font-bold text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
              REQUEST A CALL BACK
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
