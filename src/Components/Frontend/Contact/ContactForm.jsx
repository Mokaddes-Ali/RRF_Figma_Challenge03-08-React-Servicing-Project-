import React from "react";

const ContactForm = () => {
  return (
    <>
    <div className="w-[1440px] pt-[62px]">
    <div className="relative mx-auto w-[1070px] h-[364px]">
      <div className="w-[1072px] h-[364px] top-0 left-0">
        <div className="absolute top-0 left-[427px] font-roboto font-bold text-black text-[40px] tracking-[0] leading-[normal] whitespace-nowrap">
          Get in touch
        </div>

        <div className="absolute w-[1070px] h-[200px] top-[79px] left-0">
            <div className="absolute w-[514px] h-px top-[31px] left-[3px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="514" height="1" viewBox="0 0 514 1" fill="none">
            <path d="M0 0.5H513.909" stroke="#707070"/>
          </svg>
          </div>

          <div className="top-[115px] left-[3px] absolute w-[514px] h-px">
            <svg xmlns="http://www.w3.org/2000/svg" width="514" height="1" viewBox="0 0 514 1" fill="none">
            <path d="M0 0.5H513.909" stroke="#707070"/>
          </svg>
          </div>

          <div
            className="top-[116px] left-[556px] absolute w-[514px] h-px">
            <svg xmlns="http://www.w3.org/2000/svg" width="514" height="1" viewBox="0 0 514 1" fill="none">
            <path d="M0 0.5H513.909" stroke="#707070"/>
          </svg>
          </div>

            <div className="absolute w-[514px] h-px top-[31px] left-[556px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="514" height="1" viewBox="0 0 514 1" fill="none">
            <path d="M0 0.5H513.909" stroke="#707070"/>
          </svg>
          </div>
           
            <div className="absolute w-[1069px] h-px top-[199px] left-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="1070" height="1" viewBox="0 0 1070 1" fill="none">
            <path d="M0 0.5H1069.49" stroke="#707070"/>
           </svg>
          </div>

          <div className="absolute w-[196px] h-[19px] top-0 left-[3px]">
            <div className="absolute w-[196px] -top-px left-0 font-roboto font-normal text-black text-base tracking-[0] leading-[normal]">
              Full name
            </div>
          </div>

          <div className="absolute w-[111px] h-[19px] top-0 left-[556px] opacity-[0.81]">
            <div className="absolute w-[111px] -top-px left-0 font-roboto font-normal text-black text-base tracking-[0] leading-[normal]">
              Email address
            </div>
          </div>

          <div className="absolute w-[266px] h-[19px] top-[168px] left-[3px] opacity-[0.81]">
            <div className="absolute w-40 -top-px left-0 font-roboto font-normal text-black text-base tracking-[0] leading-[normal]">
              Description
            </div>
          </div>

          <div className="absolute w-[266px] h-[19px] top-[84px] left-[3px] overflow-hidden opacity-[0.81]">
            <div className="absolute w-[544px] -top-px left-px font-roboto font-normal text-black text-base tracking-[0] leading-[normal]">
              Contact number
            </div>
          </div>

          <div className="absolute w-[143px] h-[19px] top-[84px] left-[556px] opacity-[0.81]">
            <div className="absolute w-[114px] -top-px left-0 font-roboto font-normal text-black text-base tracking-[0] leading-[normal]">
              Subject
            </div>
          </div>
        </div>

        <button className="all-[unset] box-border absolute w-[216px] h-[52px] top-[312px] left-[856px]">
          <div className="relative w-[214px] h-[52px] bg-[#dd3142] rounded-[30px]">
            <div className="absolute top-4 left-6 font-roboto font-bold text-white text-xl tracking-[0] leading-[normal] whitespace-nowrap">
              SEND A MESSAGE
            </div>
          </div>
        </button>
      </div>
    </div>
    </div>
    </>
  );
};


export default ContactForm