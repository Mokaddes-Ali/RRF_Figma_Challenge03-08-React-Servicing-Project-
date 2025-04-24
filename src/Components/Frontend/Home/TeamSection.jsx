import React from 'react'
import team from '../../../assets/images/teamimage.png'

const TeamSection = () => {
  return (
    <>
    <section className="bg-white dark:bg-gray-800 w-[1440px] pt-[64px] pb-[68px]">
  <div className="flex mx-auto w-[1171px] h-[553px] relative">
    <img className="w-[262px] h-[368px] left-[303px] top-[146px] absolute" src={team} />
    <div className="w-52 h-20 left-[329px] top-[475px] absolute bg-rose-600 rounded-[5px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.05)]"></div>
    <div className="left-[382px] top-[486px] absolute justify-start text-white text-lg font-medium font-roboto">Vinay Kumar</div>
    <div className="left-[396px] top-[520px] absolute justify-start text-white text-xl font-medium font-roboto">Plumber</div>
    <img className="w-[262px] h-[368px] left-0 top-[146px] absolute" src={team} />
    <div className="w-52 h-20 left-[26px] top-[475px] absolute bg-rose-600 rounded-[5px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.05)]"></div>
    <div className="left-[79px] top-[486px] absolute justify-start text-white text-lg font-medium font-roboto">Vinay Kumar</div>
    <div className="left-[93px] top-[520px] absolute justify-start text-white text-xl font-medium font-roboto">Plumber</div>
    <img className="w-[262px] h-[368px] left-[606px] top-[146px] absolute" src={team} />
    <div className="w-52 h-20 left-[632px] top-[475px] absolute bg-rose-600 rounded-[5px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.05)]"></div>
    <div className="left-[682px] top-[486px] absolute justify-start text-white text-lg font-medium font-roboto">Vinay Kumar</div>
    <div className="left-[699px] top-[520px] absolute justify-start text-white text-xl font-medium font-roboto">Plumber</div>
    <img className="w-[262px] h-[368px] left-[909px] top-[146px] absolute" src={team} />
    <div className="w-52 h-20 left-[932px] top-[475px] absolute bg-rose-600 rounded-[5px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.05)]"></div>
    <h2 className="left-[985px] top-[486px] absolute justify-start text-white text-lg font-medium font-roboto">Vinay Kumar</h2>
    <p className="left-[999px] top-[520px] absolute justify-start text-white text-xl font-medium font-roboto">Plumber</p>
    <div className="w-[831px] h-14 left-[170px] top-[43px] absolute text-center justify-start text-neutral-500 text-sm font-normal font-['Roboto'] leading-tight">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
    <h1 className="left-[430px] top-0 absolute justify-start text-stone-950 text-3xl font-medium font-roboto uppercase">Our Dedicated Team</h1>
  </div>
</section>
      
    </>
  )
}

export default TeamSection
