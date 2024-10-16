import data from "../data/webinerData.json";
// import prevData from "../data/prevWebinar.json";
import { IoCalendarOutline } from "react-icons/io5";

const CardWebinar = () => {
  const { courses } = data;
  // const { coursesPrev } = data;
  // console.log(courses);

  return (
    <>
      <section className="text-black body-font ">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-4">
            {courses.map((course) => (
              <div key={course.id} className="p-3 md:w-1/4 ">
                <div className="bg-white border-gray-200  p-3 rounded-lg border hover:border-orange-400 ">
                  <div className="h-full rounded-lg overflow-hidden ">
                    <img
                      className="lg:h-48 md:h-36 rounded-lg w-full object-cover"
                      src={course.image}
                      alt="blog"
                    />
                    <div>
                      <div className=" py-2 text-start text-xs ">
                        <div>
                          <p>{course.title}</p>
                          {/* <p>{ course}</p> */}
                        </div>
                      </div>

                      <div>
                        {" "}
                        <h3 className="leading-relaxed text-start mb-3 text-xl font-bold">
                          {course.description}
                        </h3>
                      </div>
                      <div className="flex items-center justify-start text-orange-500">
                        <IoCalendarOutline className="text-lg" />{" "}
                        <p className="px-2">{course.day}</p>
                      </div>
                      <div className="py-2 flex items-center justify-center">
                        <button className="border border-orange-300 py-2 px-20 bg-orange-100 rounded-md hover:bg-orange-200">
                          For Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CardWebinar;
