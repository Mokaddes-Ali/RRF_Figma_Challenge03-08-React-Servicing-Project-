import React from 'react'

const ServiceTitle = () => {
  return (
    <>
        <div className="w-[1440px] h-[304px]">
          <div className="w-[1444px] h-[304px] top-0 left-0">
            <div
              className="relative w-[1440px] h-[304px] bg-cover bg-center"
              style={{ backgroundImage: "url('/src/assets/images/about-bg-im.png')" }}
            >
          <div
            className="absolute w-full h-full top-0 left-0"
            style={{
              background: "linear-gradient(90deg, #DD3142 0.03%, rgba(196, 196, 196, 0.00) 141.61%)",
            }}
          /> 
    
              {/* Main Title */}
              <div className="absolute uppercase top-[128px] left-[135px] font-roboto font-black text-[#eeff06] text-[44px] leading-none">
              Services
              </div>
    
              {/* Description */}
              <p className="absolute w-[432px] top-[191px] left-[135px] font-roboto font-normal text-white text-sm leading-[17px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book
              </p>
            </div>
          </div>
        </div>  
    </>
  )
}

export default ServiceTitle
