// import Courses from "../components/Courses";

import { useLocation } from "react-router-dom";

const CoursesPage = () => {
  const { state } = useLocation();

  console.log(state);

  return (
    <>
      <div className="py-10">
        <div className="container mx-auto bg-white py-6 px-3 text-center rounded-xl">
          <h1 className="text-4xl font-bold">{state[0].title}</h1>
        </div>
      </div>
    </>
  );
};

export default CoursesPage;
