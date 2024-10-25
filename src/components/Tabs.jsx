import { BsDot } from "react-icons/bs";
import tabData from "../data/careerGoal.json";
import Slider from "react-slick"; // Import Slider from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Tabs = ({ handleTabClick, selectedTab }) => {
  const { goals } = tabData;

  // Slick slider settings
  const settings = {
    dots: false,
    infinite: false,

    slidesToShow: 4, // Show 3 slides at once, adjust this for responsiveness
    slidesToScroll: 4,
  };

  return (
    <>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-6 mx-auto w-auto">
          <Slider {...settings}>
            {goals.map((goal) => (
              <div
                onClick={() => handleTabClick(goal.title)}
                key={goal.id}
                className={`p-4 w-auto py-2 cursor-pointer  rounded-lg  ${
                  selectedTab === goal.title
                    ? "bg-black text-white"
                    : "hover:bg-gray-300 bg-gray-200"
                }`} // Use px-2 to create horizontal space
              >
                <div className="p-1 flex items-center justify-center space-x-2 text-xs">
                  <img
                    src={goal.icon || "/icon.svg"}
                    className="w-10 h-10 rounded-full"
                    alt={goal.title}
                  />
                  <div>
                    <h3 className="text-sm text-left">{goal.title}</h3>
                    <div className="flex items-start justify-start text-xs space-x-1 ">
                      <p className="flex items-center justify-center">
                        <span>
                          <BsDot />
                        </span>
                        {goal.courses}
                      </p>
                      <p className="flex items-center  justify-center">
                        <span>
                          <BsDot />
                        </span>
                        {goal.workshops}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Tabs;
