import React from "react";
import image9 from "../assets/images/hero1.1.png";
import image10 from "../assets/images/hero1.2.png";
const HeroSection = () => {
  return (
    <>
    <div className="w-[1440px]">
    <div className="flex mx-auto relative w-[1170px] h-[436px]">
      <div className="w-[1170px] h-[436px] top-0 left-0">
        <div className="w-[500px] h-56 top-[154px] absolute -left-0.5">
        <p>
          <span class="text-black font-bricolage text-[44px] font-extrabold uppercase leading-none not-italic">
            Call us  For Any <br/></span>
            <span class="text-black font-bricolage absolute top-[52px] text-[44px] font-medium uppercase leading-none not-italic">Plumbing Needs</span>
        </p>


          <div className="top-[123px] font-bricolage font-extrabold text-black text-[34px] tracking-[0] leading-[normal] absolute left-0">
            +1800-9938-2839
          </div>

          <button className="all-[unset] box-border absolute w-[162px] h-11 top-[180px] left-0">
            <div className="relative w-40 h-11 bg-[#dd3142] rounded-[35px]">
              <div className="absolute top-[13px] left-[17px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                SEE ALL SERVICE
              </div>
            </div>
          </button>
        </div>

        <div className="absolute w-[658px] h-[436px] top-[48px] left-[512px]">
          <img
            className="w-[302px] h-[436px] top-0 left-0 absolute object-cover"
            alt="Image"
            src={image10}
          />

          <img
            className="w-[390px] h-[341px] top-12 left-[268px] absolute object-cover"
            alt="Image"
            src={image9}
          />
        </div>
      </div>
    </div>
      
    </div>
    </>
  )
}

export default HeroSection
