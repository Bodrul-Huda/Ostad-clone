import { MdOutlineLightMode } from "react-icons/md";
import { BsDot } from "react-icons/bs";
import data from "../../data/careerGoal.json";

const CareerBox = () => {
  const { goals } = data;
  // console.log(goals);
  return (
    <>
      <section className="text-black body-font ">
        <div className="container px-5 py-6 mx-auto">
          <div className="flex flex-wrap -m-4">
            {goals.map((goal) => (
              <div key={goal.id} className="p-3 w-full md:w-1/4 ">
                <div className=" p-3 rounded-lg border bg-slate-200 hover:bg-slate-50 hover:border-black ">
                  <div className="h-full rounded-lg ">
                    <div className="mt-4">
                      <div className=" text-center">
                        <div className="flex items-center justify-center mx-auto w-10 h-10 rounded-full bg-white p-1">
                          <MdOutlineLightMode className="text-center text-xl" />
                        </div>
                        <p className="py-2 font-bold">{goal.title}</p>
                      </div>
                      <div className="text-center text-xs flex items-center justify-center space-x-2">
                        <p className="flex items-center justify-center">
                          <span>
                            <BsDot />
                          </span>
                          {goal.courses}
                        </p>
                        <p className="flex items-center justify-center">
                          <span>
                            <BsDot />
                          </span>
                          {goal.workshops}
                        </p>
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

export default CareerBox;
