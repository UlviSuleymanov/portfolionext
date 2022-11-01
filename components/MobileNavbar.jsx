import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTelegram } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
const MobileNavbar = ({ closeNavbar }) => {
  return (
    <div className="flex flex-col p-2 h-[100vh]">
      <h3 className="text-[#5651e5] dark:text-[#5651e5] font-bold ">Ülvi Süleymanov</h3>
      <h4 className="mt-10 text-sm tracking-tighter font-semibold text-center">
        Journey before desitnation.
      </h4>
      {/* navbar */}
      <div className="items-center justify-center w-auto h-auto my-1 text-center">
        <div
          onClick={() => closeNavbar(false)}
          className="py-2 text-sm capitalize font-md text-gray-700 dark:text-[#5651e5] hover:text-black"
        >
          <Link href="/">Home</Link>
        </div>

        <div
          onClick={() => closeNavbar(false)}
          className="py-2 text-sm capitalize font-md text-gray-700 dark:text-[#5651e5] hover:text-black"
        >
          <Link href="#skills">Skills</Link>
        </div>
        <div
          onClick={() => closeNavbar(false)}
          className="py-2 text-sm capitalize font-md text-gray-700 dark:text-[#5651e5] hover:text-black"
        >
          <Link href="#projects">Projects</Link>
        </div>
      </div>
      {/* contacts */}
      <div className="flex flex-col mt-5 mb-40 mx-4 items-center justify-center">
        <p className="p-2 capitalize font-semibold">Let&apos;s connect</p>
        <div className="flex flex-row">
          <Link
            href="https://www.linkedin.com/in/%C3%BClvi-s%C3%BCleymanov-b9a94522b/"
            target="_blank"
            className="mx-1 "
            onClick={() => closeNavbar(false)}
          >
            <FaLinkedinIn size={35} />
          </Link>

          <Link href="https://t.me/UlviSuleymanov" target="_blank" className="mx-1 ">
            <FaTelegram size={35} onClick={() => closeNavbar(false)} />
          </Link>
          <Link href="https://github.com/UlviSuleymanov" target="_blank" className="mx-1 ">
            <AiFillGithub size={35} onClick={() => closeNavbar(false)} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
