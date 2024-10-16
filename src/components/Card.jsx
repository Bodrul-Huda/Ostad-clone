import { FaArrowRight } from "react-icons/fa";

const Card = ({ courses }) => {
  return (
    <>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-4">
            {courses.map((course) => (
              <div key={course.id} className="p-4 md:w-1/4 bg-sla">
                <div className="h-full border-2 bg-gray-50 border-gray-200 border-opacity-60 rounded-lg overflow-hidden hover:border hover:border-black">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={course.image}
                    alt="blog"
                  />
                  <div>
                    <div className="p-1 flex items-center justify-center flex-wrap space-x-2 text-xs ">
                      <div className=" bg-slate-200 py-1 px-2 m-1 rounded-md">
                        <p>{course.batch}</p>
                      </div>
                      <div className=" bg-slate-200 py-1 px-2  m-1 rounded-md">
                        <p>{course.sit}</p>
                      </div>
                      <div className=" bg-slate-200 py-1 px-2  m-1 rounded-md">
                        <p>{course.day}</p>
                      </div>
                    </div>

                    <hr />
                    <div className="bg-white">
                      {" "}
                      <h3 className="leading-relaxed mb-3 text-2xl font-bold">
                        {course.title}
                      </h3>
                    </div>
                    <div className="py-2 flex items-center justify-center">
                      <button className="flex items-center gap-3 py-2 px-16 bg-gray-200 rounded-md hover:bg-slate-300">
                        For Details <FaArrowRight />
                      </button>
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

export default Card;
