import React from "react";
import { NavLink } from "react-router";
import logo from '../../../assets/images/logo.png'

const Header = () => {
  return (
    <div className="w-[1440px] h-[60px] bg-white shadow-[0px_4px_24px_#0000000d]">
      <div className="relative w-[1170px] h-[41px] top-2 left-[135px]">

{/* Navigation Menu */}
<div className="absolute w-[470px] h-4 top-[13px] left-[526px]">
  <NavLink
    to="/"
    className={({ isActive }) =>
      `absolute top-0 left-0 font-roboto text-sm whitespace-nowrap ${
        isActive ? "text-red-500 underline underline-offset-8 decoration-3" : "text-[#222222] font-medium"
      } hover:underline hover:decoration-red hover:underline-offset-8 hover:decoration-3`
    }
  >
    Home
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) =>
      `absolute top-0 left-[75px] font-roboto text-sm whitespace-nowrap ${
        isActive ? "text-red-500 underline underline-offset-8 decoration-3" : "text-[#222222] font-medium"
      } hover:underline hover:decoration-red hover:underline-offset-8 hover:decoration-3`
    }
  >
    About us
  </NavLink>

  <NavLink
    to="/services"
    className={({ isActive }) =>
      `absolute top-0 left-[169px] font-roboto text-sm whitespace-nowrap ${
        isActive ? "text-red-500 underline underline-offset-8 decoration-3" : "text-[#222222] font-medium"
      } hover:underline hover:decoration-red hover:underline-offset-8 hover:decoration-3`
    }
  >
    Services
  </NavLink>

  <NavLink
    to="/project"
    className={({ isActive }) =>
      `absolute top-0 left-[253px] font-roboto text-sm whitespace-nowrap ${
        isActive ? "text-red-500 underline underline-offset-8 decoration-3" : "text-[#222222] font-medium"
      } hover:underline hover:decoration-red hover:underline-offset-8 hover:decoration-3`
    }
  >
    Project
  </NavLink>

  <NavLink
    to="/blogs"
    className={({ isActive }) =>
      `absolute top-0 left-[335px] font-roboto text-sm whitespace-nowrap ${
        isActive ? "text-red-500 underline underline-offset-8 decoration-3" : "text-[#222222] font-medium"
      } hover:underline hover:decoration-red hover:underline-offset-8 hover:decoration-3`
    }
  >
    Blogs
  </NavLink>

  <NavLink
    to="/contact"
    className={({ isActive }) =>
      `absolute top-0 left-[408px] font-roboto text-sm whitespace-nowrap ${
        isActive ? "text-red-500 underline underline-offset-8 decoration-3" : "text-[#222222] font-medium"
      } hover:underline hover:decoration-red hover:underline-offset-8 hover:decoration-3`
    }
  >
    Contact
  </NavLink>
</div>


        {/* Logo Section */}
        <div className="absolute w-[165px] h-[41px] top-0 left-0">
          <img src={logo} alt="logo" />
        </div>

        {/* Call Back Button */}
        <button className="all-[unset] box-border absolute w-[148px] h-9 top-[3px] left-[1024px]">
          <div className="relative w-[146px] h-9 bg-[#dd3142] rounded-[5px]">
            <div className="absolute top-3 left-[9px] font-roboto font-bold text-white text-xs tracking-[0] leading-[normal] whitespace-nowrap">
              REQUEST A CALL BACK
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
