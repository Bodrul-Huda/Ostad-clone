import Tabs from "./Tabs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./Card";
import data from "../data/courseData.json";
import { FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Courses() {
  const [cardData, setCardData] = useState([]);
  const [selectedTab, setSelectedTab] = useState(""); // New state for tracking selected tab
  const { courses } = data;

  useEffect(() => {
    if (courses.length > 0) {
      // Set the default selected tab to the first category in courses
      const defaultCategory = courses[0].category;
      setSelectedTab(defaultCategory);
      setCardData(
        courses
          .filter((course) => course.category === defaultCategory)
          .slice(0, 8)
      );
    }
  }, [courses]);

  function handleTabClick(title) {
    setSelectedTab(title);
    const filteredCourses = courses.filter(
      (course) => title === course.category
    );
    setCardData(filteredCourses.slice(0, 8));
  }

  // console.log(cardData[0].category);

  return (
    <>
      <div className="container mx-auto bg-gray-400 py-6 px-3 text-center rounded-xl">
        <h1 className="text-4xl font-bold">Our Courses</h1>

        <Tabs handleTabClick={handleTabClick} selectedTab={selectedTab} />

        <Card cardData={cardData} />

        <div className="flex items-center justify-center">
          <Link
            to={`/coursepage/${
              cardData.length > 0 ? cardData[0].category : ""
            }`}
            state={cardData}
          >
            <button className="flex items-center gap-3 py-2 px-40 bg-gray-200 rounded-md hover:bg-slate-300">
              See All <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
