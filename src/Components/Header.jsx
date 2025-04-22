import React from "react";

const Header = () => {
  return (
    <div className="w-[1440px] h-[60px] bg-white shadow-[0px_4px_24px_#0000000d]">
      <div className="relative w-[1170px] h-[41px] top-2 left-[135px]">
        <div className="absolute w-[470px] h-4 top-[13px] left-[526px]">
          <div className="absolute top-0 left-0 [font-family:'Roboto-Bold',Helvetica] font-bold text-[#222222] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
            Home
          </div>

          <div className="absolute top-0 left-[75px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#222222] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
            About us
          </div>

          <div className="absolute top-0 left-[169px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#222222] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
            Services
          </div>

          <div className="absolute top-0 left-[253px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#222222] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
            Project
          </div>

          <div className="absolute top-0 left-[335px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#222222] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
            Blogs
          </div>

          <div className="absolute top-0 left-[408px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#222222] text-sm tracking-[0] leading-[normal] whitespace-nowrap">
            Contact
          </div>
        </div>

        <div className="absolute w-[165px] h-[41px] top-0 left-0">
          <div className="absolute w-[120px] h-[33px] top-1 left-[49px]">
            <div className="absolute top-0 left-0 [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal] whitespace-nowrap">
              Plumber Point
            </div>

            <div className="absolute top-[21px] left-[73px] [font-family:'Roboto-Bold',Helvetica] font-bold text-[#dd3142] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
              Company
            </div>
          </div>

          <div className="absolute w-[43px] h-[41px] top-0 left-0">
            <div className="relative h-[41px]">
              <div className="absolute w-[29px] h-[29px] top-3 left-0 bg-[#dd3142]" />

              <div className="absolute w-9 h-9 top-0 left-[7px] bg-[#dd3142] rounded-[17.92px] border-4 border-solid border-white" />
            </div>
          </div>
        </div>

        <button className="all-[unset] box-border absolute w-[148px] h-9 top-[3px] left-[1024px]">
          <div className="relative w-[146px] h-9 bg-[#dd3142] rounded-[5px]">
            <div className="absolute top-3 left-[9px] [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
              REQUEST A CALL BACK
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};


export default Header;