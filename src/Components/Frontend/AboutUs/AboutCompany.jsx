import React from 'react'
import about from '../../../assets/images/welcome-bg.png';

const AboutCompany = () => {
  return (
    <>
    <section className="dark:bg-gray-800 w-[1440px] pt-[125px] pb-[102px] "> {/* mt-[922px] */}
  <div className="w-[1170px] flex mx-auto h-96 relative">
    <img className="w-[1170px] h-[405px] left-0 top-0 absolute" src={about} />
    <div className="w-20 h-20 left-[548px] top-[166px] absolute">
    <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 74 74" fill="none">
   <path d="M73.5678 37.1672C73.6395 36.9491 73.6765 36.7208 73.6744 36.4912C73.5843 26.9132 69.7664 17.7413 63.0226 10.9265C56.1975 4.02946 46.9268 0.103746 37.2242 0.00202688C27.5216 -0.0996927 18.1706 3.6308 11.2024 10.3832C4.23422 17.1357 0.211534 26.3647 0.00810646 36.0657C-0.195322 45.7667 3.43694 55.1562 10.1159 62.1948C16.795 69.2335 25.9813 73.3527 35.6796 73.6578C45.378 73.9629 54.8051 70.4293 61.9133 63.8244C68.4948 57.709 72.5962 49.4181 73.4908 40.5278C73.6098 39.3458 72.6815 38.3419 71.4946 38.2921C70.3077 38.2423 69.3125 39.1657 69.1845 40.3467C68.3433 48.1042 64.7363 55.3291 58.9851 60.673C52.707 66.5066 44.3807 69.6275 35.8149 69.3581C27.2491 69.0886 19.1355 65.4504 13.2365 59.2337C7.33743 53.0171 4.12934 44.724 4.30901 36.1559C4.48868 27.5877 8.04161 19.4364 14.1961 13.4726C20.3506 7.50866 28.6095 4.2138 37.1791 4.30364C45.7487 4.39348 53.9367 7.86076 59.9648 13.9524C65.9471 19.9977 69.3226 28.143 69.3736 36.6425C69.3744 36.7724 69.3861 36.9023 69.4097 37.0301C69.8109 39.1955 72.8346 39.3988 73.522 37.3066L73.5678 37.1672Z" fill="#DD3142"/>
   <path d="M53.8924 37.1997L28.1969 51.4799L28.6776 22.0869L53.8924 37.1997Z" fill="#DD3142"/>
    </svg>
    </div>
    <div className="w-[542px] h-[405px] left-0 top-[51px] absolute bg-[#ffffffb3]"></div>
    <h1 className="left-[45px] top-[76px] leading-none not-italic absolute justify-start text-black text-5xl font-bold font-roboto">Welcome to<br/>Plumber Company</h1>
    <p className="w-[425px] left-[49px] top-[196px] absolute justify-start text-black text-[14px] font-normal font-roboto not-italic leading-none">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
    <div className="w-[132px] h-11 left-[50px] top-[285px] absolute bg-[#DD3142] rounded-[45px]">

    </div>
    <button className="w-32 h-5 left-[49px] top-[295px] absolute text-center justify-start text-white text-base font-normal font-roboto underline uppercase">Learn More</button>
  </div>

</section>
      
    </>
  )
}

export default AboutCompany
