import PropTypes from "prop-types";
import React from "react";

export const Footer = ({
  vector = "vector-152.svg",
  line = "line.svg",
  img = "vector.svg",
  groupClassName,
  vector1 = "image.svg",
  vector2 = "vector-153.svg",
  vector3 = "vector-154.svg",
  rectangle = "rectangle-172.png",
  rectangle1 = "image.png",
  rectangle2 = "rectangle-172-2.png",
}) => {
  return (
    <div className="relative w-[1440px] h-[319px] bg-black">
      <p className="w-[362px] top-[97px] left-[136px] text-xs leading-[normal] absolute [font-family:'Roboto-Regular',Helvetica] font-normal text-white tracking-[0]">
        Lore Issue is simply dummy text of the printing and typesetting
        industry. Lore Issue has been the industry&#39;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <div className="absolute w-[1176px] h-3 top-[295px] left-[136px]">
        <div className="absolute top-0 left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-[#dd3142] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
          ©Copyright 2020 Techwero Systems.
        </div>

        <div className="absolute top-0 left-[987px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#dd3142] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
          Term of Services
        </div>

        <div className="absolute top-0 left-[1100px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#dd3142] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
          Privacy &amp; policy
        </div>
      </div>

      <div className="absolute w-[163px] h-[218px] top-[31px] left-[612px]">
        <div className="absolute top-0 left-px [font-family:'Roboto-Bold',Helvetica] font-bold text-[#dd3142] text-base tracking-[0] leading-[normal] whitespace-nowrap">
          OUR SERVICES
        </div>

        <div className="absolute top-[59px] left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
          Plumber Service
        </div>

        <div className="top-[88px] absolute left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
          Bathroom Plumbing Service
        </div>

        <div className="top-[117px] absolute left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
          Kitchen Plumbing Service
        </div>

        <div className="absolute top-[146px] left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
          Roof Plumbing Service
        </div>

        <div className="top-[175px] absolute left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
          Bathroom Plumbing Service
        </div>

        <div className="top-[204px] absolute left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
          Kitchen Plumbing Service
        </div>

        <img
          className="absolute w-11 h-0.5 top-7 left-0"
          alt="Vector"
          src={vector}
        />
      </div>

      <img
        className="absolute w-[1439px] h-px top-[284px] left-px object-cover"
        alt="Line"
        src={line}
      />

      <div className="absolute w-[72px] h-3 top-[169px] left-[137px]">
        <img
          className="w-1.5 left-0 absolute h-3 top-0"
          alt="Vector"
          src={img}
        />

        <div
          className={`absolute w-3 h-3 top-0 left-[26px] bg-[url(/group.png)] bg-[100%_100%] ${groupClassName}`}
        />

        <img
          className="w-3.5 left-[58px] absolute h-3 top-0"
          alt="Vector"
          src={vector1}
        />
      </div>

      <div className="absolute w-[159px] h-[226px] top-[31px] left-[839px]">
        <p className="absolute top-0 left-0 [font-family:'Roboto-Bold',Helvetica] font-bold text-[#dd3142] text-base tracking-[0] leading-[normal] whitespace-nowrap">
          <span className="[font-family:'Roboto-Bold',Helvetica] font-bold text-[#dd3142] text-base tracking-[0]">
            Contact
          </span>

          <span className="[font-family:'Roboto-Bold',Helvetica] font-bold text-[#dd3142] text-base tracking-[0]">
            &nbsp;
          </span>
        </p>

        <img
          className="absolute w-11 h-0.5 top-7 left-0"
          alt="Vector"
          src={vector2}
        />

        <p className="absolute top-[63px] left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
          <span className="[font-family:'Roboto-Regular',Helvetica] font-normal text-white text-sm tracking-[0]">
            1800-9938-2839
            <br />
          </span>

          <span className="text-xs">support@plumberpoint.com</span>
        </p>

        <p className="absolute top-[131px] left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
          <span className="[font-family:'Roboto-Regular',Helvetica] font-normal text-white text-sm tracking-[0]">
            A-507 Mandoli
            <br />
          </span>

          <span className="text-xs">New Delhi, India</span>
        </p>

        <p className="absolute top-[196px] left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
          <span className="[font-family:'Roboto-Regular',Helvetica] font-normal text-white text-sm tracking-[0]">
            Mon-Sat 9.00-15:00
            <br />
          </span>

          <span className="text-xs">Sunday CLOSED</span>
        </p>
      </div>

      <div className="absolute w-[165px] h-[41px] top-[29px] left-[137px]">
        <div className="absolute w-[120px] h-[33px] top-1 left-[49px]">
          <div className="absolute top-0 left-0 [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-lg tracking-[0] leading-[normal] whitespace-nowrap">
            Plumber Point
          </div>

          <div className="absolute top-[21px] left-[73px] [font-family:'Roboto-Bold',Helvetica] font-bold text-[#dd3142] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
            Company
          </div>
        </div>

        <div className="absolute w-[43px] h-[41px] top-0 left-0">
          <div className="relative h-[41px]">
            <div className="absolute w-[29px] h-[29px] top-3 left-0 bg-[#dd3142]" />

            <div className="absolute w-9 h-9 top-0 left-[7px] bg-[#dd3142] rounded-[17.92px] border-4 border-solid border-black" />
          </div>
        </div>
      </div>

      <div className="absolute w-[262px] h-[228px] top-[31px] left-[1045px]">
        <div className="absolute top-0 left-px [font-family:'Roboto-Bold',Helvetica] font-bold text-[#dd3142] text-base tracking-[0] leading-[normal] whitespace-nowrap">
          RECENT POST
        </div>

        <img
          className="absolute w-11 h-0.5 top-7 left-0"
          alt="Vector"
          src={vector3}
        />

        <div className="absolute w-[263px] h-[51px] top-[39px] left-0">
          <div className="relative w-[283px] h-[98px] -top-5 -left-6">
            <img
              className="absolute w-[116px] h-[98px] top-0 left-0 object-cover"
              alt="Rectangle"
              src={rectangle}
            />

            <p className="w-[179px] top-[37px] left-[104px] text-[8px] leading-[10.7px] absolute [font-family:'Roboto-Regular',Helvetica] font-normal text-white tracking-[0]">
              Lore Issue . Simply dummy text . The printing and typesetting
              industry. Lore Issue has been the industry&#39;.
            </p>

            <div className="absolute top-5 left-[104px] [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
              Sewer Line Repair
            </div>
          </div>
        </div>

        <div className="absolute w-[263px] h-[51px] top-[104px] left-0">
          <div className="relative w-[283px] h-[98px] -top-5 -left-6">
            <img
              className="absolute w-[116px] h-[98px] top-0 left-0 object-cover"
              alt="Rectangle"
              src={rectangle1}
            />

            <p className="w-[179px] top-[37px] left-[104px] text-[8px] leading-[10.7px] absolute [font-family:'Roboto-Regular',Helvetica] font-normal text-white tracking-[0]">
              Lore Issue . Simply dummy text . The printing and typesetting
              industry. Lore Issue has been the industry&#39;..
            </p>

            <div className="absolute top-5 left-[104px] [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
              Sewer Line Repair
            </div>
          </div>
        </div>

        <div className="absolute w-[263px] h-[51px] top-[177px] left-px">
          <div className="relative w-[283px] h-[98px] -top-5 -left-6">
            <img
              className="absolute w-[116px] h-[98px] top-0 left-0 object-cover"
              alt="Rectangle"
              src={rectangle2}
            />

            <p className="w-[179px] top-[37px] left-[104px] text-[8px] leading-[10.7px] absolute [font-family:'Roboto-Regular',Helvetica] font-normal text-white tracking-[0]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;..
            </p>

            <div className="absolute top-5 left-[104px] [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
              Sewer Line Repair
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  vector: PropTypes.string,
  line: PropTypes.string,
  img: PropTypes.string,
  vector1: PropTypes.string,
  vector2: PropTypes.string,
  vector3: PropTypes.string,
  rectangle: PropTypes.string,
  rectangle1: PropTypes.string,
  rectangle2: PropTypes.string,
};
