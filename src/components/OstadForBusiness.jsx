import { FaArrowRight } from "react-icons/fa";

const OstadBusiness = () => {
  return (
    <>
      <div className="container mx-auto py-4 px-2">
        <div className="py-6 bg-slate-200 rounded-2xl">
          <div className="flex flex-col md:flex-row-reverse item-center justify-center">
            <div>
              <img
                src="/hero.webp"
                className="rounded-3xl object-cover h-full w-full p-2 md:p-4 "
              />
            </div>

            <div className=" md:top-28 md:left-10  p-3 m-2 space-y-4">
              <h1 className="text-4xl font-bold">
                <span className="underline decoration-orange-500">Ostad</span>{" "}
                for business
              </h1>
              <h4 className="text-xl">
                Join our Corporate Skills Training Program, get training from
                the country&apos;s best industry experts and reinvent your team.
              </h4>
              <button className=" py-3 px-6 rounded-md bg-amber-400 flex items-center justify-between hover:bg-amber-500 focus:bg-amber-500 gap-x-2">
                Start Learning <FaArrowRight />
              </button>
              <div className="w-full flex flex-nowrap flex-col items-center gap-3 lg:!items-start">
                <p className=" py-4 text-2xl font-bold">Some of our clients</p>
                <div className="flex  gap-6 items-center justify-center p-2">
                  <img src="/client.png" className="w-full h-10" />
                  <img src="/client.png" className="w-full h-10" />
                  <img src="/client.png" className="w-full h-10" />
                  <img src="/client.png" className="w-full h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OstadBusiness;
