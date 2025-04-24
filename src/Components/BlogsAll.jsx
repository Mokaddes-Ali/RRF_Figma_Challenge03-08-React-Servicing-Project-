import React from 'react';
import image1 from '../assets//images/blog1.png';
import image2 from '../assets//images/blog1.png';
import image3 from '../assets//images/blog1.png';

const BlogsAll = () => {
  return (
    <>
     <div className="w-[1440px] pt-[65px] pb-[50px]">
        <div className="mx-auto relative w-[1168px] h-[346px]">

          <div className="absolute w-[1170px] h-[268px] top-[78px] left-0">
          <div className="absolute w-[334px] top-0 h-[265px] left-0">
      <h1 className="w-[330px] top-[152px] absolute font-roboto font-normal text-black text-xl tracking-[0] leading-[100%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting.
      </h1>
      <p className="w-[330px] top-[209px] absolute font-roboto font-normal text-black text-[12px] tracking-[0] leading-[100%]">
          Don’t wrestle with rig assembly and hot, noisy miners at home. We have the
          fastest bitcoin mining hardware running for you....
        </p>
      <img
        className="w-[332px] absolute h-[132px] top-0 left-0"
        alt="Mask group"
        src={image1}
      />
    </div>
    
    
            <div className="absolute w-[332px] h-[267px] top-0 left-[421px]">
              <h1 className="w-[328px] top-[152px] absolute font-roboto font-normal text-black text-xl tracking-[0] leading-[100%]">
          Lorem Ipsum is simply dummy text of the printing and typesetting.
          </h1>
           <p className="w-[330px] top-[209px] absolute font-roboto font-normal text-black text-[12px] tracking-[0] leading-[100%]">
          Don’t wrestle with rig assembly and hot, noisy miners at home. We have the
          fastest bitcoin mining hardware running for you....
           </p>
    
              <img
                className="w-[330px] absolute h-[132px] top-0 left-0"
                alt="Mask group"
                src={image2}
              />
            </div>
    
            <div className="absolute w-[331px] h-[268px] -top-[22px] left-[838px]">
      <div className="relative w-[331px] h-full">
        <img
          className="absolute w-full h-[180px] top-0 left-0 object-cover rounded-lg"
          alt="Blog Image"
          src={image3}
        />
    
        <h1 className="absolute top-[168px] left-0 w-full font-roboto font-normal text-black text-xl leading-snug">
          Lorem Ipsum is simply dummy text of the printing and typesetting.
        </h1>
    
        <p className="absolute top-[226px] left-0 w-full font-roboto font-normal text-black text-[12px] leading-snug">
          Don’t wrestle with rig assembly and hot, noisy miners at home. We have the
          fastest bitcoin mining hardware running for you....
        </p>
      </div>
    </div>
    
          </div>
        </div>
        </div>
    </>
  )
}

export default BlogsAll