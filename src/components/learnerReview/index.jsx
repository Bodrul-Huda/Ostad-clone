import Reviews from "./Reviews";
import Statistic from "./Static";

const ReviewIndex = () => {
  return (
    <>
      <div className="w-full bg-slate-200 md:py-16">
        <Statistic />
        <Reviews />
      </div>
    </>
  );
};

export default ReviewIndex;
