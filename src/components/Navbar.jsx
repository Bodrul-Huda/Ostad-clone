const Navbar = () => {
  return (
    <>
      <header className="text-white body-font bg-blue-900">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            href="#"
            className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <img
              rel="icon"
              type="image/svg+xml"
              src="/icon.svg"
              className="w-7 h-7"
            />
            <span className="ml-3 text-xl">My Web</span>
          </a>

          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-500	flex flex-wrap items-center text-base justify-center ">
            <div className=" space-x-3 flex flex-wrap items-center text-base justify-center">
              <input
                placeholder="Search"
                className=" text-black  p3 border border-gray-100 rounded-lg w-16 focus:w-1/3"
              />
              <div className="">
                <a className="mr-5  hover:text-gray-100">Home</a>
                <a className="mr-5 hover:text-gray-100">Second Link</a>
                <a className="mr-5 hover:text-gray-100">Third Link</a>
                <a className="mr-5 hover:text-gray-100">About</a>
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
