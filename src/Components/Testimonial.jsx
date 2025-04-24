import React from 'react'
import testimonial from '../assets/images/testimonial-bg.png'

const Testimonial = () => {
  return (
    <>

<section>
<div className="w-[1440px] h-80 relative">
  <img className="w-[1440px] h-80 left-0 top-[1px] absolute" src={testimonial} />
  <div className="w-[1440px] h-80 left-0 top-0 absolute opacity-70 bg-black"></div>
  <div className="w-52 h-9 left-[618px] top-[45px] absolute justify-start text-yellow-400 text-3xl font-medium font-['Roboto'] uppercase">Testimonial</div>
  <div className="absolute top-[273.41px] left-[700px]">
 <svg xmlns="http://www.w3.org/2000/svg" width="37" height="7" viewBox="0 0 37 7" fill="none">
  <ellipse cx="3.00156" cy="3.44484" rx="3.00156" ry="3.03468" fill="#E2E2E2"/>
  <ellipse cx="13.0064" cy="3.44484" rx="3.00156" ry="3.03468" fill="#DD3142"/>
  <ellipse cx="23.0118" cy="3.44484" rx="3.00156" ry="3.03468" fill="#E2E2E2"/>
  <ellipse cx="33.0172" cy="3.44484" rx="3.00156" ry="3.03468" fill="#E2E2E2"/>
</svg>
</div>
  <div className="w-[930.48px] h-24 left-[253px] top-[124px] absolute text-center justify-start text-white text-xl font-normal leading-[normal] font-roboto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
  <div className="w-32 h-9 left-[656px] top-[213.61px] absolute text-center justify-start text-white text-xl font-bold font-mukta">Johny Vino</div>
</div>

</section>
      
    </>
  )
}

export default Testimonial
