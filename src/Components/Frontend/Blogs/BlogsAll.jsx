import React from 'react';
import image1 from '../../../assets//images/blogimg1.png';
import image2 from '../../../assets//images/blogimg2.png';
import image3 from '../../../assets//images/blogimg3.png';

const BlogsAll = () => {
  return (
    <>
      <div className="w-[1440px] pt-[168px] -mb-8 mx-auto">
        <div className="relative w-[1170px] h-[670px] mx-auto">
          {/* First Row */}
          <div className="absolute top-0 left-0 w-full flex justify-between">
            {/* Card 1 */}
            <div className="relative w-[334px] h-[265px]">
              <img className="absolute w-full h-[132px] top-0 left-[1px] object-cover rounded-lg" src={image1} alt="Blog 1" />
              <h1 className="absolute top-[147px] left-[3px] w-full font-roboto text-black text-xl leading-snug">
                Lorem Ipsum is simply dummy text of the printing and typesetting.
              </h1>
              <p className="absolute top-[209px] left-0 w-full max-w-[330px] font-roboto text-black text-[12px] leading-snug">
                Don’t wrestle with rig assembly and hot, noisy miners at home. We have the fastest bitcoin mining hardware running for you....
              </p>
              <button className="text-[#DD3142] absolute top-[265px] left-[0px] text-center font-roboto text-base font-normal underline decoration-solid decoration-[auto] underline-offset-auto">
               Learn More
              </button>
            </div>

            {/* Card 2 */}
            <div className="relative w-[330px] h-[265px]">
              <img className="absolute w-full h-[132px] top-0 left-[4px] object-cover rounded-lg" src={image2} alt="Blog 2" />
              <h1 className="absolute top-[148px] left-[5px] w-full font-roboto text-black text-xl leading-6">
              All you want to know about industrial laws
              </h1>
              <p className="absolute top-[209px] left-0 max-w-[330px]  font-roboto text-black text-[12px] leading-snug">
                Don’t wrestle with rig assembly and hot, noisy miners at home. We have the fastest bitcoin mining hardware running for you....
              </p>
              <button className="text-[#DD3142] absolute top-[265px] left-[0px] text-center font-roboto text-base font-normal underline decoration-solid decoration-[auto] underline-offset-auto">
               Learn More
              </button>
            </div>

            {/* Card 3 */}
            <div className="relative w-[334px] h-[265px]">
              <img className="absolute w-full h-[132px] top-0 left-[4px] object-cover rounded-lg" src={image3} alt="Blog 3" />
              <h1 className="absolute top-[148px] left-[5px] w-full font-roboto text-black text-xl leading-snug">
                Lorem Ipsum is simply dummy text of the printing and typesetting.
              </h1>
              <p className="absolute top-[209px] left-0 max-w-[330px] font-roboto text-black text-[12px] leading-snug">
                Don’t wrestle with rig assembly and hot, noisy miners at home. We have the fastest bitcoin mining hardware running for you....
              </p>
              <button className="text-[#DD3142] absolute top-[265px] left-[0px] text-center font-roboto text-base font-normal underline decoration-solid decoration-[auto] underline-offset-auto">
               Learn More
              </button>
            </div>
          </div>

          {/* Second Row */}
          <div className="absolute top-[342px] left-0 w-full flex justify-between">
            {/* Card 4 */}
            <div className="relative w-[334px] h-[265px]">
              <img className="absolute w-full h-[132px] top-0 left-[3px] object-cover rounded-lg" src={image1} alt="Blog 4" />
              <h1 className="absolute top-[152px] left-[4px] w-full font-roboto text-black text-xl leading-6">
              All you want to know about industrial laws
              </h1>
              <p className="absolute top-[209px] left-[4px] max-w-[330px] font-roboto text-black text-[12px] leading-snug">
                Don’t wrestle with rig assembly and hot, noisy miners at home. We have the fastest bitcoin mining hardware running for you....
              </p>
              <button className="text-[#DD3142] absolute top-[265px] left-[2px] text-center font-roboto text-base font-normal underline decoration-solid decoration-[auto] underline-offset-auto">
               Learn More
              </button>
            </div>

            {/* Card 5 */}
            <div className="relative w-[334px] h-[265px]">
              <img className="absolute w-full h-[132px] top-0 left-[4px] object-cover rounded-lg" src={image2} alt="Blog 5" />
              <h1 className="absolute top-[152px] left-[4px] w-full font-roboto text-black text-xl leading-snug">
                Lorem Ipsum is simply dummy text of the printing and typesetting.
              </h1>
              <p className="absolute top-[209px] left-[4px] max-w-[330px] font-roboto text-black text-[12px] leading-snug">
                Don’t wrestle with rig assembly and hot, noisy miners at home. We have the fastest bitcoin mining hardware running for you....
              </p>
              <button className="text-[#DD3142] absolute top-[265px] left-[4px] text-center font-roboto text-base font-normal underline decoration-solid decoration-[auto] underline-offset-auto">
               Learn More
              </button>
            </div>

            {/* Card 6 */}
            <div className="relative w-[334px] h-[265px]">
              <img className="absolute w-full h-[132px] top-0 left-[4px] object-cover rounded-lg" src={image3} alt="Blog 6" />
              <h1 className="absolute top-[152px] left-[4px] w-full font-roboto text-black text-xl leading-snug">
                Lorem Ipsum is simply dummy text of the printing and typesetting.
              </h1>
              <p className="absolute top-[209px] left-[4px] max-w-[330px] font-roboto text-black text-[12px] leading-snug">
                Don’t wrestle with rig assembly and hot, noisy miners at home. We have the fastest bitcoin mining hardware running for you....
              </p>
              <button className="text-[#DD3142] absolute top-[265px] left-[4px] text-center font-roboto text-base font-normal underline decoration-solid decoration-[auto] underline-offset-auto">
               Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsAll;
