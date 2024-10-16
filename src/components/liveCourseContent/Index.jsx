import Container from "./container";

const IndexLiveCourse = () => {
  return (
    <>
      <div className="container mx-auto py-6 px-3 text-center rounded-xl">
        <div className="text-center py-4">
          <h2 className="font-bold text-4xl py-2">Live Course Contents</h2>
          <p>See what you are getting after joining our live courses</p>
        </div>
        <div className="md:container mx-auto md:py-6 md:px-3 text-center md:bg-white rounded-xl">
          <div className="m-3">
            <Container />
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexLiveCourse;
