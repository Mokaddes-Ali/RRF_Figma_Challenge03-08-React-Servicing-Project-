import React from "react";
import icon1 from "../../../assets/images/icon1.png";
import icon2 from "../../../assets/images/icon2.png";
import icon3 from "../../../assets/images/icon3.png";
import line from "../../../assets/images/Line.png";

const ServiceSection = () => {
  return (
    // Main container with fixed width and height
    <div className="relative w-[1440px] top-[44px] h-[297px]">
      {/* Background section in red */}
      <div className="w-[1440px] h-[297px] top-0 left-0 bg-[#dd3142]">

        {/* Third service card: Maintenance */}
        <div className="absolute w-[248px] h-[193px] top-[70px] left-[931px]">
          {/* Service title */}
          <div className="absolute top-[72px] left-[81px] font-medium text-white text-sm">
            Maintenance
          </div>

          {/* Service description */}
          <p className="absolute w-[244px] top-[100px] left-0 font-normal text-white text-xs text-center leading-[16.0px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>

          {/* Service icon */}
          <img
            className="w-[60px] h-[65px] left-[92px] absolute top-0"
            alt="Icon"
            src={icon3}
          />

          {/* Learn More button */}
          <button className="all-[unset] box-border top-[161px] left-[72px] absolute w-[115px] h-8 bg-[#f6f9fa] rounded-[5px]">
            <button className="all-[unset] box-border relative w-[83px] h-[19px] top-1.5 left-[17px]">
              <div className="absolute w-[81px] -top-1.5 -left-4 font-normal text-black text-base text-center underline">
                Learn More
              </div>
            </button>
          </button>
        </div>

        {/* First service card: Residental Service */}
        <div className="absolute w-[241px] h-[188px] top-[75px] left-[266px]">
          {/* Service description */}
          <p className="w-[237px] top-[95px] absolute left-0 font-normal text-white text-xs text-center leading-[16.0px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>

          {/* Service title */}
          <div className="absolute top-[67px] left-[61px] font-medium text-white text-sm">
            Residental Service
          </div>

          {/* Service icon */}
          <img
            className="w-[51px] h-[52px] left-[93px] absolute top-0"
            alt="Icon"
            src={icon1}
          />

          {/* Learn More button */}
          <button className="all-[unset] box-border top-[156px] left-16 absolute w-[115px] h-8 bg-[#f6f9fa] rounded-[5px]">
            <button className="all-[unset] box-border relative w-[83px] h-[19px] top-1.5 left-[17px]">
              <div className="absolute w-[81px] -top-1.5 -left-4 font-normal text-black text-base text-center underline">
                Learn More
              </div>
            </button>
          </button>
        </div>

        {/* Second service card: Commercial Service */}
        <div className="absolute w-[248px] h-[190px] top-[73px] left-[595px]">
          {/* Service description */}
          <p className="w-[244px] top-[93px] absolute left-0 font-normal text-white text-xs text-center leading-[16.0px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry.
          </p>

          {/* Service title */}
          <div className="absolute top-[65px] left-[59px] font-medium text-white text-sm">
            Commercial Service
          </div>
          
          {/* Service icon */}
          <img
            className="w-[51px] h-[52px] left-[95px] absolute top-0"
            alt="Icon"
            src={icon2}
          />

          {/* Learn More button */}
          <button className="all-[unset] box-border top-[158px] left-[67px] absolute w-[115px] h-8 bg-[#f6f9fa] rounded-[5px]">
            <button className="all-[unset] box-border relative w-[83px] h-[19px] top-1.5 left-[17px]">
              <div className="absolute w-[81px] -top-1.5 -left-4 font-normal text-black text-base text-center underline">
                Learn More
              </div>
            </button>
          </button>
        </div>

        {/* Vertical separator line between first and second service */}
        <img
          className="h-[229px] left-[548px] absolute w-px top-[42px] object-cover"
          alt="Line"
          src={line}
        />

        {/* Vertical separator line between second and third service */}
        <img
          className="h-[229px] left-[885px] absolute w-px top-[42px] object-cover"
          alt="Line"
          src={line}
        />
      </div>
    </div>
  );
};

export default ServiceSection;
