import React from "react";
import icon from "./icon.png";
import image from "./image.png";
import image1 from "./image.svg";
import line2 from "./line-2.svg";
import line from "./line.svg";
import vector from "./vector.svg";
const ServiceSection= () => {
  return (
    <div className="relative w-[1440px] h-[297px]">
      <div className="fixed w-[1440px] h-[297px] top-0 left-0 bg-[#dd3142]">
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
            src={icon}
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
            src={image}
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

          <div className="w-12 h-12 left-[98px] bg-[url(/group-274.png)] bg-[100%_100%] absolute top-0">
            <img
              className="top-0.5 left-8 absolute w-0.5 h-0.5"
              alt="Vector"
              src={vector}
            />

            <img
              className="top-11 left-3.5 absolute w-0.5 h-0.5"
              alt="Vector"
              src={image1}
            />
          </div>

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
          className="h-56 left-[884px] absolute w-px top-[42px] object-cover"
          alt="Line"
          src={line2}
        />
      </div>
    </div>
  );
};


export default ServiceSection