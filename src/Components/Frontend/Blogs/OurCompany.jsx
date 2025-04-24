import React from 'react';
import image from "../../../assets/images/about-blog-img.png";

const OurCompany = () => {
  return (
    <div className="relative w-[1440px] h-[389px]">
      <div className="w-[1440px] h-[389px] top-0 left-0 relative">
        {/* Right Side Content */}
        <div className="absolute w-[436px] top-[125px] left-[774px]">
          <h1 className="font-roboto font-medium text-[#000000] text-[38px] leading-[normal] w-[531px] mb-[13px]">
            Lorem Ipsum is simply dummy text.
          </h1>

          <p className="font-roboto font-normal text-black text-[12px] w-[535px] leading-normal mb-[4px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book
          </p>

          <p className="font-roboto font-normal text-black text-[12px] w-[535px] leading-normal mb-[2px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic.
          </p>

          <p className="font-roboto font-normal text-black text-[12px] w-[555px] leading-normal mb-1">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>

          <button className="text-[#DD3142] text-center font-roboto text-base font-normal underline decoration-solid decoration-[auto] underline-offset-auto">
     Learn More
     </button>


          {/* Highlight Section */}
          <div className="w-[440px] mt-6">
            <p className="font-roboto font-light text-white text-3xl leading-normal whitespace-nowrap">
              Trust Our Team of Experts
            </p>
            <p className="font-roboto font-normal text-white text-sm leading-normal mt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book
            </p>
          </div>
        </div>

        {/* Left Side Image */}
        <img
          className="absolute w-[568px] h-[412px] top-[72px] left-[135px] object-cover"
          src={image}
          alt="About Blog"
        />
      </div>
    </div>
  );
};

export default OurCompany;

