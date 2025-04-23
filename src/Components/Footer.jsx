import React from 'react'
import line from "../assets/images/footerline.png";
import logo from "../assets/images/footerlogo.png";
import rectangle from "../assets/images/footer.png";
import rectangle1 from "../assets/images/footer.png";
import rectangle2 from "../assets/images/footer.png";

const Footer = () => {
  return (
    <>
    <div className="relative w-[1440px] h-[319px] bg-black">

      {/* কোম্পানি সম্পর্কে ছোট লেখা */}
      <p className="w-[362px] top-[97px] left-[136px] text-xs leading-[normal] font-roboto absolute font-normal text-white tracking-[0]">
      Lore Issue is simply dummy text of the printing and typesetting industry. Lore Issue has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>

      {/* নিচের কপিরাইট ও লিংক অংশ */}
      <div className="absolute w-[1176px] h-3 top-[295px] left-[136px]">
        <div className="absolute top-0 left-0 font-roboto text-[#dd3142] text-[10px]">
          ©Copyright 2020 Techwero Systems.
        </div>
        <div className="absolute top-0 left-[987px] font-roboto text-[#dd3142] text-[10px]">
          Term of Services
        </div>
        <div className="absolute top-0 left-[1100px] font-roboto text-[#dd3142] text-[10px]">
          Privacy &amp; policy
        </div>
      </div>

      {/* সেবাসমূহ তালিকা */}
      <div className="absolute w-[163px] h-[218px] top-[31px] left-[610px]">
        <div className="absolute uppercase top-0 font-roboto font-bold text-[#dd3142] text-base">
          our services
        </div>
        {/* সেবাসমূহের লিস্ট */}
        <div className="absolute top-[59px] font-roboto text-white text-xs">Plumber Service</div>
        <div className="top-[88px] absolute font-roboto text-white text-xs">Bathroom Plumbing Service</div>
        <div className="top-[117px] absolute font-roboto text-white text-xs">Kitchen Plumbing Service</div>
        <div className="top-[146px] absolute font-roboto text-white text-xs">Roof Plumbing Service</div>
        <div className="top-[175px] absolute font-roboto text-white text-xs">Bathroom Plumbing Service</div>
        <div className="top-[204px] absolute font-roboto text-white text-xs">Kitchen Plumbing Service</div>
      </div>

      {/* footer এর উপরের লাইন */}
      <img className="absolute w-screen xl:w-[1439px] h-px top-[284px] left-px object-cover" alt="Line" src={line} />

      {/* সোশ্যাল মিডিয়া আইকন */}
      <div className="absolute w-[72px] h-3 top-[169px] left-[137px]">
      <svg xmlns="http://www.w3.org/2000/svg" width="72" height="12" viewBox="0 0 72 12" fill="none">
  <path d="M4.90459 1.9925H6V0.0845C5.81102 0.0585 5.16107 0 4.40413 0C2.82476 0 1.74286 0.9935 1.74286 2.8195V4.5H0V6.633H1.74286V12H3.87968V6.6335H5.55204L5.81752 4.5005H3.87918V3.031C3.87968 2.4145 4.04566 1.9925 4.90459 1.9925Z" fill="#DD3142"/>
  <path d="M32 4.8V7.2H35.3948C34.8992 8.5968 33.5648 9.6 32 9.6C30.0152 9.6 28.4 7.9848 28.4 6C28.4 4.0152 30.0152 2.4 32 2.4C32.8604 2.4 33.6884 2.7084 34.3316 3.2688L35.9084 1.4592C34.8284 0.5184 33.4412 0 32 0C28.6916 0 26 2.6916 26 6C26 9.3084 28.6916 12 32 12C35.3084 12 38 9.3084 38 6V4.8H32Z" fill="#DD3142"/>
  <path d="M72 1.42062C71.4794 1.66154 70.9246 1.82123 70.3462 1.89877C70.9412 1.524 71.3954 0.935077 71.6089 0.225231C71.0541 0.574154 70.4416 0.820615 69.7889 0.958154C69.2621 0.366462 68.5114 0 67.6924 0C66.1034 0 64.8241 1.36062 64.8241 3.02862C64.8241 3.26862 64.8434 3.49938 64.8906 3.71908C62.5045 3.59631 60.3931 2.38985 58.9747 0.552C58.7271 1.00523 58.5819 1.524 58.5819 2.08246C58.5819 3.13108 59.0938 4.06062 59.8568 4.59877C59.3956 4.58954 58.9433 4.44831 58.56 4.22585C58.56 4.23508 58.56 4.24708 58.56 4.25908C58.56 5.73046 59.5549 6.95262 60.8595 7.23415C60.6259 7.30154 60.3712 7.33385 60.107 7.33385C59.9232 7.33385 59.7377 7.32277 59.5636 7.28215C59.9355 8.48123 60.9908 9.36277 62.2455 9.39138C61.269 10.1972 60.0291 10.6828 58.6869 10.6828C58.4515 10.6828 58.2257 10.6717 58 10.6412C59.2714 11.5062 60.7781 12 62.403 12C67.6845 12 70.572 7.38462 70.572 3.384C70.572 3.25015 70.5676 3.12092 70.5615 2.99262C71.1311 2.56615 71.6097 2.03354 72 1.42062Z" fill="#DD3142"/>
</svg>
      </div>

      {/* যোগাযোগ তথ্য */}
      <div className="absolute w-[159px] h-[226px] top-[31px] left-[839px]">
        <p className="absolute uppercase top-0 font-roboto font-bold text-[#dd3142] text-base leading-[normal]">Contact</p>

        {/* ফোন ও ইমেইল */}
        <p className="absolute top-[60px] font-roboto text-white text-sm">
          1800-9938-2839<br />
          <span className="text-xs">support@plumberpoint.com</span>
        </p>

        {/* ঠিকানা */}
        <p className="absolute top-[127px] font-roboto text-white text-sm">
          A-507 Mandoli<br />
          <span className="text-xs">New Delhi, India</span>
        </p>

        {/* সময়সূচি */}
        <p className="absolute top-[192px] font-roboto text-white text-sm">
          Mon-Sat 9.00-15:00<br />
          <span className="text-xs">Sunday CLOSED</span>
        </p>
      </div>

      {/* কোম্পানি নাম ও লোগো */}
      <div className="absolute w-[165px] h-[41px] top-[29px] left-[137px]">
        
      <img src={logo} alt='Logo' />
      </div>

      {/* রিসেন্ট ব্লগ পোস্ট অংশ */}
      <div className="absolute w-[262px] h-[228px] top-[31px] left-[1045px]">
        <div className="absolute top-0 font-bold text-[#dd3142] text-base">RECENT POST</div>

        {/* ১ম পোস্ট */}
        <div className="absolute w-[263px] h-[51px] top-[39px] left-0">
          <div className="relative w-[283px] h-[98px] -top-5 -left-6">
            <img className="absolute w-[116px] h-[98px] object-cover" alt="Rectangle" src={rectangle} />
            <div className="absolute top-5 left-[104px] font-medium text-white text-[10px]">Sewer Line Repair</div>
            <p className="w-[179px] top-[37px] left-[104px] text-[8px] absolute text-white">
            Lore Issue . Simply dummy text . The printing and typesetting industry. Lore Issue has been the industry'.
            </p>
          </div>
        </div>

        {/* ২য় পোস্ট */}
        <div className="absolute w-[263px] h-[51px] top-[104px] left-0">
          <div className="relative w-[283px] h-[98px] -top-5 -left-6">
            <img className="absolute w-[116px] h-[98px] object-cover" alt="Rectangle" src={rectangle1} />
            <div className="absolute top-5 left-[104px] font-medium text-white text-[10px]">Sewer Line Repair</div>
            <p className="w-[179px] top-[37px] left-[104px] text-[8px] absolute text-white">
            Lore Issue . Simply dummy text . The printing and typesetting industry. Lore Issue has been the industry'.
            </p>
          </div>
        </div>

        {/* ৩য় পোস্ট */}
        <div className="absolute w-[263px] h-[51px] top-[177px] left-px">
          <div className="relative w-[283px] h-[98px] -top-5 -left-6">
            <img className="absolute w-[116px] h-[98px] object-cover" alt="Rectangle" src={rectangle2} />
            <div className="absolute top-5 left-[104px] font-medium text-white text-[10px]">Sewer Line Repair</div>
            <p className="w-[179px] top-[37px] left-[104px] text-[8px] absolute text-white">
            Lore Issue . Simply dummy text . The printing and typesetting industry. Lore Issue has been the industry'.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};


export default Footer;