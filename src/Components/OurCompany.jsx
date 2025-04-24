import React from 'react';
import image from "../assets/images/our-company.png";

const OurCompany = () => {
  return (
    <>

    <div className="relative w-[1440px] h-[389px]">
      <div className="w-[1440px] h-[389px] top-0 left-0 bg-[#dd3142]">
        <div className="absolute w-[436px] h-72 top-[51px] left-[863px]">
          <div className="absolute w-[436px] h-[134px] top-0 left-0">
            <div className="absolute top-0 left-0 font-roboto font-bold text-white text-[44px] tracking-[0] leading-[normal] whitespace-nowrap">
              Our Company History
            </div>

            <p className="absolute w-[432px] top-[70px] left-0 font-roboto font-normal text-white text-sm tracking-[0] leading-[normal]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book
            </p>
          </div>

          <div className="absolute w-[440px] h-[113px] top-[175px] left-0">
            <p className="absolute top-0 left-0 font-roboto font-light text-white text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
              Trust Our Team of Experts
            </p>

            <p className="absolute w-[432px] top-[49px] left-1 font-roboto font-normal text-white text-sm tracking-[0] leading-[normal]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book
            </p>
          </div>
        </div>

        <img
          className="absolute w-[630px] h-[314px] top-[38px] left-[135px] object-cover"
          alt="Image"
          src={image}
        />
      </div>
    </div>     
    </>
  )
}

export default OurCompany;
