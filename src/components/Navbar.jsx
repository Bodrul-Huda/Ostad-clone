import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDownloadMenu = () => {
    setIsDownloadOpen(!isDownloadOpen);
  };

  return (
    <>
      <header className="text-white body-font bg-blue-900">
        <div className="container mx-auto flex flex-wrap p-5 items-center justify-between">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-white"
          >
            <img
              rel="icon"
              type="image/svg+xml"
              src="/icon.svg"
              className="w-7 h-7"
            />
            <span className="ml-3 text-xl">My Web</span>
          </Link>

          {/* Hamburger Menu for Mobile */}
          <button
            className="md:hidden flex items-center text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <nav
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:items-center md:space-x-4`}
          >
            <div className="flex flex-col md:flex-row w-full md:w-auto">
              <input
                placeholder="Search"
                className="text-black p-2 border border-gray-100 rounded-lg mb-2 md:mb-0 md:w-64 focus:outline-none"
              />
              <div className="flex flex-wrap items-center text-base">
                <Link
                  to="/specialoffer"
                  className="mx-1 cursor-pointer rounded-md border py-2 px-2 hover:text-gray-100"
                >
                  Special Offer
                </Link>
                <Link
                  to="/codemama"
                  className="mx-1 cursor-pointer py-2 px-2 hover:rounded-md hover:bg-blue-700 hover:text-gray-100"
                >
                  Code Mama
                </Link>
                <Link
                  to="/blogs"
                  className="mx-1 cursor-pointer py-2 px-2 hover:rounded-md hover:bg-blue-700 hover:text-gray-100"
                >
                  Blogs
                </Link>
                <Link
                  to="/freecourses"
                  className="mx-1 cursor-pointer py-2 px-2 hover:rounded-md hover:bg-blue-700 hover:text-gray-100"
                >
                  Free Courses
                </Link>
                <div className="relative">
                  <button
                    className="flex items-center mx-1 py-2 px-2 hover:rounded-md hover:bg-blue-700 hover:text-gray-100"
                    onClick={toggleDownloadMenu}
                  >
                    Download <IoIosArrowDown className="ml-1" />
                  </button>
                  {isDownloadOpen && (
                    <div className="absolute left-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg">
                      <Link
                        to="#"
                        className="block px-4 py-2 cursor-pointer text-gray-800 rounded-md hover:bg-blue-100"
                      >
                        Android
                      </Link>
                      <Link
                        to="#"
                        className="block px-4 py-2 cursor-pointer text-gray-800 rounded-md hover:bg-blue-100"
                      >
                        iOS
                      </Link>
                      <Link
                        to="#"
                        className="block px-4 py-2 cursor-pointer text-gray-800 rounded-md hover:bg-blue-100"
                      >
                        Windows
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </nav>

          <div className="flex items-center justify-center space-x-2">
            <button className="inline-flex items-center text-gray-500 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Dashboard
            </button>
            <button className="inline-flex items-center bg-gray-100 border-0 rounded-full focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0">
              <img
                src="/public/vite.svg"
                className="w-full h-full m-1 rounded-full"
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

// import { IoIosArrowDown } from "react-icons/io";

// const Navbar = () => {
//   return (
//     <>
//       <header className="text-white body-font bg-blue-900">
//         <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//           <a
//             href="#"
//             className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
//           >
//             <img
//               rel="icon"
//               type="image/svg+xml"
//               src="/icon.svg"
//               className="w-7 h-7"
//             />
//             <span className="ml-3 text-xl">My Web</span>
//           </a>

//           <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-500	flex flex-wrap items-center text-base justify-center ">
//             <div className="w-full space-x-3 flex flex-wrap items-center text-base justify-center">
//               <input
//                 placeholder="Search"
//                 className=" text-black  p3 border border-gray-100 rounded-lg w-16 focus:w-1/3"
//               />
//               <div className="">
//                 <a className="mx-1 cursor-pointer rounded-md border py-2 px-2   hover:text-gray-100">
//                   Special Offer
//                 </a>
//                 <a className=" mx-1 py-2 px-2  hover:rounded-md hover:bg-blue-700 hover:text-gray-100">
//                   Code Mama
//                 </a>
//                 <a className="mx-1 py-2 px-2  hover:rounded-md hover:bg-blue-700 hover:text-gray-100">
//                   Blogs
//                 </a>
//                 <a className="mx-1 py-2 px-2 hover:rounded-md hover:bg-blue-700 hover:text-gray-100">
//                   Free Courses
//                 </a>

//                 <a className="px-2 mx-2 w-full">
//                   Download <IoIosArrowDown />
//                 </a>
//               </div>
//             </div>
//           </nav>
//           <div className="flex items-center justify-center space-x-2">
//             <button className="inline-flex items-center text-gray-500 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
//               Dashboard
//             </button>
//             <button className="inline-flex items-center bg-gray-100 border-0 rounded-full focus:outline-none hover:bg-gray-200 text-base mt-4 md:mt-0">
//               <img
//                 src="/public/vite.svg"
//                 className="w-full h-full m-1 rounded-full"
//               />
//             </button>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;
