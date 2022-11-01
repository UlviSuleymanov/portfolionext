import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import MobileNavbar from './MobileNavbar';
import Navbar from './Navbar';

const Header = () => {
  const [toggleNavbar, setToggleNavbar] = useState(false);
  return (
    <div className="flex flex-row">
      <div className="flex">
        {toggleNavbar && (
          <div className="fixed w-4/5 h-screen dark:bg-black/95 bg-white overflow-auto shadow-md z-10 animate-slide-in">
            <div className="absolute w-full flex justify-end items-center p-2">
              <AiFillCloseCircle fontSize={30} onClick={() => setToggleNavbar(false)} />
            </div>
            <MobileNavbar closeNavbar={setToggleNavbar} />
          </div>
        )}
        <Navbar toggleNavbar={toggleNavbar} setToggleNavbar={setToggleNavbar} />
      </div>
    </div>
  );
};

export default Header;
