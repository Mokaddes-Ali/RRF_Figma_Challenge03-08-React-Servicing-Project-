import React from 'react'
import bg from "../assets/images/about-service.png";

const AboutService = () => {
  return (
    <>
    <div className="w-[1440px] py-12">
      <div className=" w-[1171px] h-[389px] mx-auto">
        <div className="relative h-[389px]">
          <div className="absolute w-[851px] h-[389px] top-[26px] left-80 bg-[#dd3142]" />

          <div className="absolute w-[432px] h-[134px] top-[151px] left-[693px]">
            <div className="relative w-[436px] h-[134px]">
              <div className="absolute top-0 left-0 font-roboto font-bold text-white text-[44px] tracking-[0] leading-[normal] whitespace-nowrap">
                Commercial Service
              </div>

              <p className="absolute w-[432px] top-[70px] left-0 font-roboto font-normal text-white text-sm tracking-[0] leading-[normal]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&#39;s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </div>

          <img
            className="absolute w-[630px] h-[314px] top-[64px] left-0 object-cover"
            alt="Bg"
            src={bg}
          />
        </div>
      </div>
    </div>

      
    </>
  )
}

export default AboutService
