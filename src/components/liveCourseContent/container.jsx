import { FcBriefcase } from "react-icons/fc";
import data from "../../data/liveCourseContent.json";

const Container = () => {
  const { contents } = data;

  return (
    <>
      <section className="text-black body-font">
        <div className="container md:px-5 mx-auto">
          <div className="custom-grid grid grid-cols-2 md:grid-cols-3 -m-4">
            {contents.map((content) => (
              <div
                key={content.id}
                className="col-span-1 rounded-md md:rounded-none bg-white m-1 p-1 md:m-0"
              >
                <div className="p-2 rounded-lg">
                  <div className="h-full rounded-lg">
                    <div className="mt-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center mx-auto p-1">
                          <FcBriefcase className="text-center text-2xl md:text-5xl" />
                        </div>
                        <p className="py-2 text-sm md:text-lg font-bold">
                          {content.title}
                        </p>
                        <p className="hidden md:block">{content.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Container;
