import { CAROUSEL_IMG } from "../constants";

const CarouselCard = ({ creativeId }) => {
  return (
    <div className="">
      <img className="w-44 h-44 " src={CAROUSEL_IMG + creativeId} />;
    </div>
  );
};

export default CarouselCard;
