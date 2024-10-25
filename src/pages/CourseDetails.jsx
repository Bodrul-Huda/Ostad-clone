import { useLocation } from "react-router-dom";

const CourseDetails = () => {
  const { state } = useLocation();
  // console.log(state);

  return (
    <>
      <h1>{state.title}</h1>
      <h1>{state.description}</h1>
    </>
  );
};

export default CourseDetails;
