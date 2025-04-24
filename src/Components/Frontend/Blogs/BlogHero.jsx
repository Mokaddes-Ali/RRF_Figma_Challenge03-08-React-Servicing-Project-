import React from 'react';
import image4 from "../../../assets/images/bloghero.png";

const BlogHero = () => {
  return (
    <>
    <div className="w-[1440px] pt-[18px] pb-[25px]">
    <div className="relative mx-auto w-[1170px] h-[255px]">
      <div className="w-[1170px] h-[255px] top-0 left-0">
        <div className="absolute w-[436px] h-[138px] top-[59px] left-0">
          <div className="absolute font-roboto font-bold text-black text-[44px] tracking-[0] leading-[normal] whitespace-nowrap top-0 left-0">
            Our Blogs
          </div>

          <p className="absolute w-[432px] top-[74px] left-0 font-roboto font-normal text-black text-sm tracking-[0] leading-[normal]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&#39;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book
          </p>
        </div>

        <img
          className="absolute w-[664px] h-[255px] top-0 left-[506px] object-cover"
          alt="Image"
          src={image4}
        />
      </div>
    </div>
    </div>
    </>
  )
}

export default BlogHero