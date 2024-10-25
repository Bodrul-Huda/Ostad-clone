import "./App.css";
import LoadingProgressBar from "./components/LoadingBar";

import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <LoadingProgressBar />
      <div>
        <Navbar />
        <div className="bg-gray-100 space-y-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
