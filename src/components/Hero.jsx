import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigator = useNavigate();

  function handleClick() {
    navigator("/coursepage");
  }

  return (
    <>
      <div className="container mx-auto py-4">
        <div className="py-6 md:relative">
          <img src="/hero.webp" className="rounded-3xl" />
          <div className="md:absolute md:top-28 md:left-10 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 bg-clip-text text-transparent to-90% p-3 space-y-4">
            <h1 className="text-5xl font-extrabold">Bangladesh Learns Live</h1>
            <h4 className="text-2xl font-extrabold">
              Upgrade your future through Skill Development
            </h4>
            <button
              onClick={handleClick}
              className=" text-white py-3 px-6 rounded-md bg-blue-500 flex items-center justify-between hover:bg-blue-600 focus:bg-blue-600 gap-x-2"
            >
              Start Learning <FaArrowRight />
            </button>
            <p className=" py-4 md:py-20 text-red-500 md:text-white text-2xl">
              7000+ Graduates are working in various local and global companies:
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
