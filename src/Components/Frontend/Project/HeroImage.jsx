import React from 'react';
import welcome from '../../../assets/images/home-background.png'


const HeroImage = () => {
  return (
    <>
    <div className="w-[1440px]">
    <img className="w-[1440px] h-[255px]" src={welcome} />
    </div>
    </>
  )
}

export default HeroImage