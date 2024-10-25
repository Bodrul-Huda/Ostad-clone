import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SpecialOffer from "./pages/SpecialOffer.jsx";
import CodeMama from "./pages/CodeMama.jsx";
import CareerGoal from "./components/careerGoal/CareerGoal";
import CodeMamaComponent from "./components/CodeMamaComponent.jsx";
import Courses from "./components/Courses";
import Hero from "./components/Hero";
import ReviewIndex from "./components/learnerReview";
import IndexLiveCourse from "./components/liveCourseContent/Index";
import OstadBusiness from "./components/OstadForBusiness";
import Webinar from "./components/Webinar";
import BlogPage from "./pages/Blogs.jsx";
import FreeCourses from "./pages/FreeCourses.jsx";
import CoursesPage from "./pages/CoursesPage.jsx";
import CourseDetails from "./pages/CourseDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, // This renders by default on the home page
        element: (
          <>
            <Hero />
            <Courses />
            <Webinar />
            <CareerGoal />
            <IndexLiveCourse />
            <CodeMamaComponent />
            <OstadBusiness />
            <ReviewIndex />
          </>
        ),
      },
      {
        path: "/specialoffer",
        element: <SpecialOffer />,
      },
      {
        path: "/codemama",
        element: <CodeMama />,
      },
      {
        path: "/blogs",
        element: <BlogPage />,
      },
      {
        path: "/freecourses",
        element: <FreeCourses />,
      },
      {
        path: "/coursepage/:category",
        element: <CoursesPage />,
      },
      {
        path: "/course/:id",
        element: <CourseDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
