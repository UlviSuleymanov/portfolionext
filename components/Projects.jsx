import Image from 'next/image';
import lyriks from '../public/assets/projects/Lyrics.png';
import shareme from '../public/assets/projects/ShareMe.png';

const Projects = () => {
  return (
    <div id="projects" className="mt-40 flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <div className="p-2 w-full flex flex-row justify-center">
        <div className="w-[40%] aspect-square md:h-[216px] my-20 flex flex-col justify-center mx-3">
          <Image src={lyriks} alt="spotifyclone" />

          <div className="flex justify-center flex-col md:flex-row text-sm mt-2">
            <a
              className="text-md  font-semibold mx-2 mt-2 bg-red-600 rounded-md text-white shadow-sm p-1 text-center  hover:bg-red-500"
              href="https://lyriksvip.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              View demo
            </a>
            <a
              className="text-sm font-thin mx-1 mt-2 hover:bg-red-600 hover:text-white p-1 text-center rounded-md"
              href="https://github.com/UlviSuleymanov/spotify-clone"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="w-[40%] aspect-square  md:h-[216px] my-20 flex flex-col justify-center mx-3">
          <Image src={shareme} alt="pinterestclone" />

          <div className="flex justify-center flex-col md:flex-row text-sm mt-2">
            <a
              rel="noreferrer"
              className="text-md font-semibold mx-2 mt-2 bg-red-600 rounded-md text-white shadow-sm p-1 text-center  hover:bg-red-500"
              href="https://shareme-vip.netlify.app/"
              target="_blank"
            >
              View demo
            </a>
            <a
              rel="noreferrer"
              className="text-sm font-thin mx-1 mt-2 hover:bg-red-600 hover:text-white p-1 text-center rounded-md"
              href="https://github.com/UlviSuleymanov/postagram"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
