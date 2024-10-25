import { FaArrowRight } from "react-icons/fa";

const CodeMamaComponent = () => {
  return (
    <>
      <div className="container mx-auto py-6 px-3 text-center rounded-xl">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white col-span-1 shadow-lg rounded-lg">
              <div className="flex flex-row-reverse items-center justify-center p-1 gap-2 md:m-2 w-full">
                <div className="w-7/12 md:w-full p-0 m-0">
                  <p className=" text-xl md:text-3xl font-bold text-left py-4">
                    Explore your coding knowledge with CodeMama
                  </p>
                  <button className="flex items-center text-white gap-2 py-2 px-5 bg-black rounded-md hover:bg-gray-800">
                    Check CodeMama <FaArrowRight />
                  </button>
                </div>
                <div className="w-5/12 h-full md:py-2 md:w-full">
                  <img
                    src="/image2.jpg"
                    className="w-full h-full xs:w-[140px] xs:h-[140px] md:!w-full md:!h-auto md:!aspect-[16/7] object-cover rounded-tl-lg rounded border md:!bg-gray-200 "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeMamaComponent;
