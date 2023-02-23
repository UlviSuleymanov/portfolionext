import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
const Main = () => {
  return (
    <div id="/" className="w-full h-screen text-center flex flex-col mt-20">
      <div className="w-full h-full mx-auto flex p-2  justify-center items-center max-w-[1220px]">
        <div className="max-w-[700px]">
          <p className="uppercase tracking-tighter text-sm">
            Your vision is my priority
          </p>
          <h1 className="font-bold text-4xl py-4">
            Hi, I&apos;m <span className="text-[#5651e5]">ÜLVİ</span>
          </h1>
          <h1 className="font-bold text-4xl py-1">A Fullstack Developer.</h1>
          <p className="py-4 w-auto overflow-hidden">
            I&apos;m a Fullstack developer specializing in building web and
            mobile applications. I have never ending cruiosity and passion for
            coding. Currently, I&apos;m focused on building applications(web and
            mobile) and learning new technologies.
          </p>
          <Link
            href="#projects"
            className="bg-red-600 rounded-md text-white shadow-sm p-1 text-center  hover:bg-red-500 "
          >
            <button type="button">View Works</button>
          </Link>
          <Link
            href="https://www.upwork.com/freelancers/~01d4cdfeb9b8a4b107"
            className="hover:bg-red-600 hover:text-white p-1 text-center rounded-md ml-5"
            target="_blank"
          >
            <button type="button">Hire Me</button>
          </Link>
        </div>
      </div>
      <div className="text-center mt-10 justify-center mx-auto p-2 flex mb-20 flex-col ">
        <div>
          <h1 className="text-lg font-semibold">Let&apos;s connect</h1>
        </div>
        <div className="flex flex-row">
          <Link
            href="https://github.com/UlviSuleymanov"
            target="_blank"
            className="text-center justify-center mx-auto p-2 flex flex-row mb-20 hover:scale-150 transition-all duration-150 ease-in-out "
          >
            <AiFillGithub size={40} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/%C3%BClvi-s%C3%BCleymanov-b9a94522b/"
            target="_blank"
            className="text-center justify-center mx-auto p-2 flex flex-row mb-20 hover:scale-150 transition-all duration-150 ease-in-out "
          >
            <FaLinkedinIn size={40} />
          </Link>

          <Link
            href="https://t.me/UlviSuleymanov"
            target="_blank"
            className="text-center justify-center mx-auto p-2 flex flex-row mb-20 hover:scale-150 transition-all duration-150 ease-in-out "
          >
            <FaTelegram size={40} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
