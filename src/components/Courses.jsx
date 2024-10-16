import Tabs from "./Tabs";
// import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
// import Tabs2 from "./Tabs2";
import data from "../data/courseData.json";
import { FaArrowRight } from "react-icons/fa";

export default function Courses() {
  const { courses } = data;
  // console.log(courses);

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <>
      <div className="container mx-auto bg-white py-6 px-3 text-center rounded-xl">
        <h1 className="text-4xl font-bold">Our Courses</h1>
        <div className="px-2 mx-2 py-2">
          <Slider {...settings}>
            <div>
              <Tabs />
            </div>
            <div>
              <Tabs />
            </div>
            <div>
              <Tabs />
            </div>
            <div>
              <Tabs />
            </div>
            <div>
              <Tabs />
            </div>
            <div>
              <Tabs />
            </div>
          </Slider>
        </div>

        <Card courses={courses} />

        <div className="flex items-center justify-center">
          <button className="flex items-center gap-3 py-2 px-40 bg-gray-200 rounded-md hover:bg-slate-300">
            See All <FaArrowRight />
          </button>
        </div>
      </div>
    </>
  );
}
