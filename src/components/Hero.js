import { Link } from "react-router-dom";
import { images } from "../assets/products";

const Hero = () => {
  return (
    <div
      className="relative bg-cover bg-center sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[870px]"
      style={{ backgroundImage: `url(${images.img13})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white text-center px-4 py-12 sm:py-16 md:py-20 lg:py-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold max-w-3xl text-center">
          Discover Your Signature Scent
        </h1>
        <p className="text-lg mt-4 max-w-2xl px-6 sm:text-xl">
          Immerse yourself in our curated collection of luxurious and enchanting fragrances for every occasion.
        </p>
        <Link to="/collection">
          <button className="mt-8 px-6 py-3 bg-[#1F3357] hover:bg-[#152B4F] rounded-md text-lg font-semibold transition duration-300">
            Explore Collection
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;