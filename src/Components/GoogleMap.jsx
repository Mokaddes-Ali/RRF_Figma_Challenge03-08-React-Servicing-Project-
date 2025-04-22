import React from "react";
import vector from "./vector.svg";
const GoogleMap = () => {
  return (
    <div className="relative w-[1440px] h-[420px]">
      <div className="fixed w-[1440px] h-[420px] top-0 left-0 bg-[#f9f9f9]">
        <div className="absolute w-[661px] h-[354px] top-[33px] left-[643px] bg-[url(/screenshot-2020-07-17-at-10-39-1.png)] bg-cover bg-[50%_50%]">
          <img
            className="absolute w-6 h-[39px] top-[151px] left-[356px]"
            alt="Vector"
            src={vector}
          />
        </div>

        <div className="absolute w-[381px] h-[317px] top-[49px] left-[135px]">
          <div className="absolute w-[212px] top-0 left-0 [font-family:'Roboto-Bold',Helvetica] font-bold text-[#dd3142] text-lg tracking-[0] leading-[normal]">
            Contact Us
          </div>

          <p className="absolute w-[377px] top-7 left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>

          <div className="w-[284px] top-[97px] absolute h-[37px] left-0">
            <p className="absolute w-[280px] top-[21px] left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal]">
              Monday to Saturday 9:30 am - 4:30 pm
            </p>

            <div className="absolute w-[139px] top-0 left-0 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#dd3142] text-sm tracking-[0] leading-[normal]">
              Business hours:
            </div>
          </div>

          <div className="w-[196px] top-[158px] absolute h-[37px] left-0">
            <div className="absolute w-48 top-[21px] left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal]">
              A-67 south Ex Delhi-11002
            </div>

            <div className="absolute w-[77px] top-0 left-0 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#dd3142] text-sm tracking-[0] leading-[normal]">
              Address:
            </div>
          </div>

          <div className="w-[109px] top-[219px] absolute h-[37px] left-0">
            <div className="absolute w-[105px] top-[21px] left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-sm tracking-[0] leading-[normal]">
              abc@abc.com
            </div>

            <div className="absolute w-[54px] top-0 left-0 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#dd3142] text-sm tracking-[0] leading-[normal]">
              Email:
            </div>
          </div>

          <div className="w-[150px] top-[280px] absolute h-[37px] left-0">
            <div className="w-[146px] top-[21px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black absolute left-0 text-sm tracking-[0] leading-[normal]">
              1800 - 458495-4455
            </div>

            <div className="w-[61px] top-0 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#dd3142] absolute left-0 text-sm tracking-[0] leading-[normal]">
              Phone:
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default GoogleMap