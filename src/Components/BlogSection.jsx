import React from 'react'
import image1 from "../assets/images/blog1.png"
import image2 from "../assets/images/blog2.png"
import image3 from "../assets/images/blog3.png"

const BlogSection = () => {
  return (
    <>
    <div className="w-[1440px]">
    <div className="mx-auto relative w-[1171px] h-[346px]">
      <div className="absolute -top-px left-0 [font-family:'Roboto-Medium',Helvetica] font-medium text-[#0d0d0d] text-3xl tracking-[0] leading-[normal] whitespace-nowrap">
        OUR RECENT BLOGS
      </div>

      <div className="absolute w-[1170px] h-[268px] top-[78px] left-0">
        <div className="absolute w-[334px] h-[265px] top-px left-0">
          <p className="w-[330px] top-[150px] left-px absolute [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal]">
            <span className="[font-family:'Roboto-Regular',Helvetica] font-normal text-black text-xl tracking-[0]">
              Lorem Ipsum is simply dummy text of the printing and typesetting.{" "}
              <br />
            </span>

            <span className="text-sm">
              <br />
            </span>

            <span className="text-xs">
              Don’t wrestle with rig assembly and hot, noisy miners at home. We
              have the fastest bitcoin mining hardware running for you....
            </span>
          </p>

          <img
            className="w-[332px] absolute h-[132px] top-0 left-0"
            alt="Mask group"
            src={image1}
          />
        </div>

        <div className="absolute w-[332px] h-[267px] top-0 left-[421px]">
          <p className="w-[328px] top-[149px] left-px absolute [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal]">
            <span className="[font-family:'Roboto-Regular',Helvetica] font-normal text-black text-xl tracking-[0]">
              Lorem Ipsum is simply dummy text of the printing and typesetting.{" "}
              <br />
            </span>

            <span className="text-xs">
              <br />
              Don’t wrestle with rig assembly and hot, noisy miners at home. We
              have the fastest bitcoin mining hardware running for you....
            </span>
          </p>

          <img
            className="w-[330px] absolute h-[132px] top-0 left-0"
            alt="Mask group"
            src={image2}
          />
        </div>

        <div className="absolute w-[331px] h-[268px] top-0 left-[841px]">
          <div className="relative w-[377px] h-72 -top-5 -left-6">
            <p className="w-[329px] top-[170px] left-6 absolute [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal]">
              <span className="[font-family:'Roboto-Regular',Helvetica] font-normal text-black text-xl tracking-[0]">
                Lorem Ipsum is simply dummy text of the printing and
                typesetting. <br />
              </span>

              <span className="text-xs">
                <br />
                Don’t wrestle with rig assembly and hot, noisy miners at home.
                We have the fastest bitcoin mining hardware running for you....
              </span>
            </p>

            <img
              className="absolute w-[377px] h-[180px] top-0 left-0 object-cover"
              alt="Rectangle"
              src={image3}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
      
    </>
  )
}

export default BlogSection
