import CarouselCard from "./CarouselCard";

const Carousel = ({ carousels }) => {
  return (
    <div className="w-full h-56 bg-gray-800 py-7 cursor-pointer">
      <div className="w-2/3 mx-auto flex justify-evenly">
        {carousels.map((carousel) => (
          <CarouselCard key={carousel?.data?.bannerId} {...carousel.data} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
