import { MdOutlineLightMode } from "react-icons/md";
import { CiSettings } from "react-icons/ci";

const WebinarBanner = () => {
  return (
    <>
      <div className="flex flex-wrap -m-4">
        <div className="p-4 lg:w-1/3">
          <div className="h-full  px-8  pb-24  overflow-hidden relative">
            <div className=" leading-none absolute bottom-0 left-1/2 w-full">
              <MdOutlineLightMode className="text-5xl text-gray-400 " />
            </div>
          </div>
        </div>
        <div className="p-4 lg:w-1/3">
          <h1 className="text-green-500 font-bold text-4xl py-2">
            Watch Free Webinar
          </h1>
          <h5>See what are the benefits Ostad offering to you</h5>
        </div>
        <div className="p-4 lg:w-1/3">
          <div className="h-full px-8 pb-24 overflow-hidden relative">
            <div className="leading-none absolute top-0 -right-72 w-full">
              <CiSettings className="text-8xl text-gray-400 " />
              {/* <MdOutlineLightMode className="text-5xl " /> */}
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative w-full">
        <div className=" leading-none absolute bottom-0 left-40">
          <MdOutlineLightMode className="text-5xl text-gray-400 " />
        </div>
        <div className="p-4 text-center">
          <h1 className="text-green-500 font-bold text-4xl py-2">
            Watch Free Webinar
          </h1>
          <h5>See what are the benefits Ostad offering to you</h5>
        </div>
        <div className=" leading-none absolute top-0 right-0">
          <CiSettings className="text-8xl text-gray-400 " />
        </div>
      </div> */}
    </>
  );
};

export default WebinarBanner;
