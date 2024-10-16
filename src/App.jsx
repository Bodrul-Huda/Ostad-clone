import "./App.css";
import CareerGoal from "./components/careerGoal/CareerGoal";
import CodeMama from "./components/CodeMama";
import Courses from "./components/Courses";
import Hero from "./components/Hero";
import ReviewIndex from "./components/learnerReview";
import IndexLiveCourse from "./components/liveCourseContent/Index";
import Navbar from "./components/Navbar";
import OstadBusiness from "./components/OstadForBusiness";
import Webinar from "./components/Webinar";

function App() {
  return (
    <div className="bg-gray-100 space-y-10">
      <Navbar />
      <Hero />
      <Courses />
      <Webinar />
      <CareerGoal />
      <IndexLiveCourse />
      <CodeMama />
      <OstadBusiness />
      <ReviewIndex />
    </div>
  );
}

export default App;
