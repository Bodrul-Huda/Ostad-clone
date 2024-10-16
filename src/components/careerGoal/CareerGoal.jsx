import CareerBox from "./CareerBox";

const CareerGoal = () => {
  return (
    <>
      <div className="container mx-auto  py-6 px-3 my-4 text-center rounded-xl">
        <div className="w-full text-center">
          <h2 className="text-4xl font-bold py-2">Set your career goal</h2>
          <h2>
            Select your career goal from the options below and start lerning
          </h2>
          <div className="py-3 flex item-center justify-center -m-4">
            <CareerBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerGoal;
