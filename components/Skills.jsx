import Image from "next/image";
import html from "../public/assets/skills/html.png";
import css from "../public/assets/skills/css.png";
import javascript from "../public/assets/skills/javascript.png";
import react from "../public/assets/skills/react.png";
import next from "../public/assets/skills/nextjs.png";
import tailwind from "../public/assets/skills/tailwind.png";
import firebase from "../public/assets/skills/firebase.png";
import aws from "../public/assets/skills/aws.png";
import sanity from "../public/assets/skills/sanity.png";
import java from "../public/assets/skills/java.png";
import spring from "../public/assets/skills/spring.png";
import mysql from "../public/assets/skills/mysql.png";

const Skills = () => {
  return (
    <div
      id="skills"
      className="my-20 items-center justify-center flex flex-col "
    >
      <div className="flex items-center flex-col justify-center md:flex-row py-2 md:p-2 md:m-2">
        <h3 className="items-center text-center">Front-end skills:</h3>
        <div className="flex flex-row ">
          <Image
            src={html}
            className="hover:scale-150 transition-all duration-150 ease-in-out mx-1"
            height="40"
            width="40"
            alt="html"
          />

          <Image
            src={css}
            className="hover:scale-150 transition-all duration-150 ease-in-out mx-1"
            height="40"
            width="40"
            alt="css"
          />
          <Image
            src={javascript}
            className="hover:scale-150 transition-all duration-150 ease-in-out mx-1"
            height="40"
            width="40"
            alt="javascript"
          />
          <Image
            src={react}
            className="hover:scale-150 transition-all duration-150 ease-in-out mx-1"
            height="40"
            width="40"
            alt="react"
          />
          <Image
            src={next}
            className="hover:scale-150 transition-all duration-150 ease-in-out mx-1 dark:bg-white rounded-full shadow-none outline-none"
            height="40"
            width="40"
            alt="next"
          />
          <Image
            src={tailwind}
            className="hover:scale-150 transition-all duration-150 ease-in-out mx-1"
            height="40"
            width="40"
            alt="tailwind"
          />
        </div>
        <div className="flex mt-1 ml-0 md:ml-5 items-center flex-col text-center justify-center md:flex-row">
          <h3 className="text-center items-center justify-center pr-4 md:px-2 ">
            Back-end Skills:
          </h3>
          <div className="flex flex-row">
            <Image
              src={java}
              alt="firebase"
              className="hover:scale-150 transition-all duration-150 ease-in-out mx-1"
              height="40"
              width="40"
            />
            <Image
              src={spring}
              alt="firebase"
              className="hover:scale-150 transition-all duration-150 ease-in-out mx-1"
              height="40"
              width="40"
            />
            <Image
              src={mysql}
              alt="firebase"
              className="hover:scale-150 transition-all duration-150 ease-in-out mx-1"
              height="40"
              width="40"
            />
            <Image
              src={aws}
              alt="aws"
              className="hover:scale-150 transition-all duration-150 ease-in-out mx-1"
              height="40"
              width="40"
            />
            <Image
              src={sanity}
              alt="sanity"
              className="hover:scale-150 transition-all duration-150 ease-in-out mx-1"
              height="40"
              width="40"
            />
            <Image
              src={firebase}
              alt="firebase"
              className="hover:scale-150 transition-all duration-150 ease-in-out mx-1"
              height="40"
              width="40"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
