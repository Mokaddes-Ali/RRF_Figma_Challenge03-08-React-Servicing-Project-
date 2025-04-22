import React from "react";
import image from "./image.svg";
import path3378 from "./path-3378.svg";
import path3379 from "./path-3379.svg";
import path3381 from "./path-3381.svg";
import path3382 from "./path-3382.svg";

const ContactForm = () => {
  return (
    <div className="relative w-[1070px] h-[364px]">
      <div className="fixed w-[1072px] h-[364px] top-0 left-0">
        <div className="absolute top-0 left-[427px] [font-family:'Roboto-Bold',Helvetica] font-bold text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
          Get in touch
        </div>

        <div className="absolute w-[1070px] h-[200px] top-[79px] left-0">
          <img
            className="absolute w-[514px] h-px top-[31px] left-[3px]"
            alt="Path"
            src={path3378}
          />

          <img
            className="top-[115px] left-[3px] absolute w-[514px] h-px"
            alt="Path"
            src={path3379}
          />

          <img
            className="top-[116px] left-[556px] absolute w-[514px] h-px"
            alt="Path"
            src={image}
          />

          <img
            className="absolute w-[514px] h-px top-[31px] left-[556px]"
            alt="Path"
            src={path3381}
          />

          <img
            className="absolute w-[1069px] h-px top-[199px] left-0"
            alt="Path"
            src={path3382}
          />

          <div className="absolute w-[196px] h-[19px] top-0 left-[3px]">
            <div className="absolute w-[196px] -top-px left-0 [font-family:'Rubik-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
              Full name
            </div>
          </div>

          <div className="absolute w-[111px] h-[19px] top-0 left-[556px] opacity-[0.81]">
            <div className="absolute w-[111px] -top-px left-0 [font-family:'Rubik-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
              Email address
            </div>
          </div>

          <div className="absolute w-[266px] h-[19px] top-[168px] left-[3px] opacity-[0.81]">
            <div className="absolute w-40 -top-px left-0 [font-family:'Rubik-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
              Description
            </div>
          </div>

          <div className="absolute w-[266px] h-[19px] top-[84px] left-[3px] overflow-hidden opacity-[0.81]">
            <div className="absolute w-[544px] -top-px left-px [font-family:'Rubik-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
              Contact number
            </div>
          </div>

          <div className="absolute w-[143px] h-[19px] top-[84px] left-[556px] opacity-[0.81]">
            <div className="absolute w-[114px] -top-px left-0 [font-family:'Rubik-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
              Subject
            </div>
          </div>
        </div>

        <button className="all-[unset] box-border absolute w-[216px] h-[52px] top-[312px] left-[856px]">
          <div className="relative w-[214px] h-[52px] bg-[#dd3142] rounded-[30px]">
            <div className="absolute top-4 left-6 [font-family:'Roboto-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              SEND A MESSAGE
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};


export default ContactForm