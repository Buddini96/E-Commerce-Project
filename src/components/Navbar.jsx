import React from 'react'
import logoImg from '../assets/common/logo.png'

function Navbar() {
  return (
    <header className="header px-12 py-3 bg-white-100 relative z-20">
      <div className="lg-:h-[88px] lg:absolute lg:top-0 lg:right-0 lg-w-1/3 lg:-z-10">
        <nav className="p-4 flex justify-between items-center relative">
          <div className="flex items-center gap-14">
            <div>
              <img src={logoImg} alt="LogoImg" className='h-7'/>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar
