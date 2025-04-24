import React from "react";

const PageTitleContac= () => {
  return (
    <div className="w-[1440px] h-[304px]">
      <div className="w-[1444px] h-[304px] top-0 left-0">
        <div className="relative w-[1440px] h-[304px] bg-[url(/src/assets/images/about-bg-im.png)] bg-cover bg-[50%_50%]">
          <div className="absolute w-[1440px] h-[304px] top-0 left-0 [background:linear-gradient(90deg,rgba(221,49,66,1)_0%,rgba(196,196,196,0)_100%)]" />

          <div className="absolute top-[101px] left-[135px] font-roboto font-black text-[#eeff06] text-[44px] tracking-[0] leading-[normal] whitespace-nowrap">
            CONTACT US
          </div>

          <p className="absolute w-[432px] top-[167px] left-[135px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-sm tracking-[0] leading-[normal]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book
          </p>
        </div>
      </div>
    </div>
  );
};

export default PageTitleContac