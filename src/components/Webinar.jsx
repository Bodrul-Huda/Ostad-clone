// import { useState } from "react";
import CardWebinar from "./CardWebinar";
import PrevWebniar from "./prevWebinar";
import WebinarBanner from "./WebinarBanner";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";

const Webinar = () => {
  return (
    <>
      <div className="container mx-auto bg-gray-900 text-white py-6 px-3 text-center rounded-xl">
        <WebinarBanner />

        <div className="flex items-center justify-center py-6">
          <div className="w-1/4 flex items-center space-x-3">
            <HiOutlineDesktopComputer className="text-4xl" />
            <p className="text-2xl">Upcoming Live Webinar</p>
          </div>
          <div className="w-3/4">
            <hr className="border-gray-500 border-t-1" />
          </div>
        </div>

        <div>
          <CardWebinar />
        </div>
        <div className="flex items-center justify-center py-6">
          <div className="w-1/4 flex items-center space-x-3">
            <HiOutlineDesktopComputer className="text-4xl" />
            <p className="text-2xl">Previous Webinar</p>
          </div>
          <div className="w-3/4">
            <hr className="border-gray-500 border-t-1" />
          </div>
        </div>
        <div>
          <PrevWebniar />
        </div>
        <div className="flex items-center justify-center relative">
          <div className="absolute bottom-0 left-56">
            <CiSettings className="text-6xl" />
          </div>
          <button className="px-8 py-3 flex items-center justify-center gap-x-2 text-black rounded-md bg-gray-200 hover:bg-slate-300">
            See all Webinar <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default Webinar;
