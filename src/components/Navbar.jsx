import React from 'react'
import logoImg from '../assets/common/logo.png'
import { menulists } from '../assets/data/data';
import { CustomLink } from './CustomComponents';
import {} from "react-icons/io"
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
// <div className="lg-:h-[88px] lg:absolute lg:top-0 lg:right-0 lg-w-1/3 lg:-z-10"></div>

function Navbar() {
  return (
    <header className="header px-12 py-3 bg-[#f4f4f4] relative z-20">
      <nav className="p-4 flex justify-between items-center relative">
        <div className="flex items-center gap-14">
          <div>
            <img src={logoImg} alt="LogoImg" className="h-7" />
          </div>
          <div className="hidden lg:flex items-center justify-between gap-8">
            {menulists.map((list) => (
              <li key={list.id} className="uppercase list-none">
                <a href={list.link}></a>
              </li>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-8 icons">
          <div className="uppercase hidden lg:block text-inherit relative z-20">
            <CustomLink>Login</CustomLink>
            <span className="">/</span>
            <CustomLink>Register</CustomLink>
          </div>
          <div className="icon flex items-center justify-center gap-6">
            <IoSearchOutline size={23} />
            <IoCartOutline size={23} />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar
