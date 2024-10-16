import { BsDot } from "react-icons/bs";

const Tabs = () => {
  return (
    <>
      <div className="bg-gray-200 rounded-lg mx-2 hover:bg-gray-300 focus:bg-gray-900 focus:text-white py-2">
        <div className="flex items-center justify-center space-x-2">
          <div>
            <img src="/icon.svg" className="w-10 h-10 rounded-full" />
          </div>
          <div>
            <h3 className="text-sm">Web & App Development</h3>
            <div className="flex items-start justify-start text-xs space-x-1">
              <p className="flex items-center justify-center">
                <span>
                  <BsDot />
                </span>
                12 Courses
              </p>
              <p className="flex items-center justify-center">
                <span>
                  <BsDot />
                </span>
                3 Workshops
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
