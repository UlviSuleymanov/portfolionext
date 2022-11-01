import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';

const Navbar = ({ toggleNavbar, setToggleNavbar }) => {
  const handleToggle = () => {
    if (toggleNavbar === false) {
      setToggleNavbar(true);
    }
  };
  const { theme, systemTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChange = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <SunIcon
          className="w-6 h-6 text-yellow-500 mx-auto hover:text-gray-600"
          role="button"
          onClick={() => setTheme('light')}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-5 h-5 text-gray-900 mx-auto hover:text-yellow-300"
          role="button"
          onClick={() => setTheme('dark')}
        />
      );
    }
  };
  return (
    <nav className="absolute  w-full">
      <div className="flex flex-row items-center">
        <h2 className="cursor-pointer px-1 capitalize font-bold mr-auto text-[#5651e5] hover:text-blue-500 ">
          <Link href="/">Ülvi Süleymanov</Link>
        </h2>
        {/* Desktop nav */}

        <div className=" flex-row p-2 ml-auto items-center ">
          <div className="hidden md:flex">
            <div className="mx-2">{renderThemeChange()}</div>
            <div className="mx-2 font-normal  dark:text-[#5651e5] dark:hover:text-blue-500 text-gray-800 hover:text-gray-500 transition-all duration-200 ease-in-out capitalize">
              <Link href="/">Home</Link>
            </div>
            <div className="mx-2 font-normal  dark:text-[#5651e5] dark:hover:text-blue-500 text-gray-800 hover:text-gray-500 transition-all duration-200 ease-in-out capitalize">
              <Link href="#skills">Skills</Link>
            </div>
            <div className="mx-2 font-normal  dark:text-[#5651e5] dark:hover:text-blue-500 text-gray-800 hover:text-gray-500 transition-all duration-200 ease-in-out capitalize">
              <Link href="#projects">Projects</Link>
            </div>
            <div className="mx-2 font-normal  dark:text-[#5651e5] dark:hover:text-blue-500 text-gray-800 hover:text-gray-500 transition-all duration-200 ease-in-out capitalize">
              <Link href="/">Contact</Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <div className="mx-4">{renderThemeChange()}</div>
            <HiMenu onClick={() => handleToggle()} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
