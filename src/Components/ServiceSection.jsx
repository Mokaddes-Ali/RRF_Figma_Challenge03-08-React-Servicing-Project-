import React from "react";
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import line2 from "../assets/images/Line.png";
import line from "../assets/images/Line.png";
import vector from "../assets/images/Line.png";
const ServiceSection= () => {
  return (
    <div className="relative w-[1440px] h-[297px]">
      <div className="w-[1440px] h-[297px] top-0 left-0 bg-[#dd3142]">
        <div className="absolute w-[248px] h-[193px] top-[70px] left-[931px]">
          <div className="absolute top-[72px] left-[81px] [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
            Maintenance
          </div>

          <p className="absolute w-[244px] top-[100px] left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-[16.0px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>

          <img
            className="w-[60px] h-[65px] left-[92px] absolute top-0"
            alt="Icon"
            src={icon3}
          />

          <button className="all-[unset] box-border top-[161px] left-[72px] absolute w-[115px] h-8 bg-[#f6f9fa] rounded-[5px]">
            <button className="all-[unset] box-border relative w-[83px] h-[19px] top-1.5 left-[17px]">
              <div className="absolute w-[81px] top-0 left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[normal] underline whitespace-nowrap">
                Learn More
              </div>
            </button>
          </button>
        </div>

        <div className="absolute w-[241px] h-[188px] top-[75px] left-[266px]">
          <p className="w-[237px] top-[95px] absolute left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-[16.0px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>

          <div className="absolute top-[67px] left-[61px] [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
            Residental Service
          </div>

          <img
            className="w-[51px] h-[52px] left-[93px] absolute top-0"
            alt="Icon"
            src={icon1}
          />

          <button className="all-[unset] box-border top-[156px] left-16 absolute w-[115px] h-8 bg-[#f6f9fa] rounded-[5px]">
            <button className="all-[unset] box-border relative w-[83px] h-[19px] top-1.5 left-[17px]">
              <div className="absolute w-[81px] top-0 left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[normal] underline whitespace-nowrap">
                Learn More
              </div>
            </button>
          </button>
        </div>

        <div className="absolute w-[248px] h-[190px] top-[73px] left-[595px]">
          <p className="w-[244px] top-[93px] absolute left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-xs text-center tracking-[0] leading-[16.0px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>

          <div className="absolute top-[65px] left-[59px] [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal] whitespace-nowrap">
            Commercial Service
          </div>
          
          <img
            className="w-[51px] h-[52px] left-[93px] absolute top-0"
            alt="Icon"
            src={icon2}
          />

 

          <button className="all-[unset] box-border top-[158px] left-[67px] absolute w-[115px] h-8 bg-[#f6f9fa] rounded-[5px]">
            <button className="all-[unset] box-border relative w-[83px] h-[19px] top-1.5 left-[17px]">
              <div className="absolute w-[81px] top-0 left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-base text-center tracking-[0] leading-[normal] underline whitespace-nowrap">
                Learn More
              </div>
            </button>
          </button>
        </div>

        <img
          className="h-[229px] left-[548px] absolute w-px top-[42px] object-cover"
          alt="Line"
          src={line}
        />
          <img
          className="h-[229px] left-[885px] absolute w-px top-[42px] object-cover"
          alt="Line"
          src={line}
        />

      </div>
    </div>
  );
};


export default ServiceSection