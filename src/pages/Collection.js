import { useState } from "react";
import { Link } from "react-router-dom";
import fragrances from "../assets/products"; 
import { images } from "../assets/products";

const Collection = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  const filteredFragrances = fragrances.filter(frag => {
    return (
      (selectedSize ? frag.size === selectedSize : true) &&
      (selectedGender ? frag.gender === selectedGender : true) &&
      (selectedBrand ? frag.house === selectedBrand : true)
    );
  });

  return (
    <div className="bg-gray-100">
      <div
        className="relative bg-cover bg-center sm:h-[350px] md:h-[400px] lg:h-[250px]"
        style={{ backgroundImage: `url(${images.img5})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-3xl font-bold text-center mb-6">Fragrance Collection</h1>
        </div>
      </div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-32 py-8">
        <div className="flex justify-between space-x-6">
          <div className="w-1/3">
            <label className="block text-sm font-medium text-gray-700">Size</label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full mt-2 border p-2 rounded"
            >
              <option value="">All Sizes</option>
              <option value="30 ml">30 ml</option>
              <option value="50 ml">50 ml</option>
              <option value="75 ml">75 ml</option>
              <option value="100 ml">100 ml</option>
              <option value="125 ml">125 ml</option>
              <option value="200 ml">200 ml</option>
            </select>
          </div>

          <div className="w-1/3">
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              className="w-full mt-2 border p-2 rounded"
            >
              <option value="">All Genders</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
            </select>
          </div>

          <div className="w-1/3">
            <label className="block text-sm font-medium text-gray-700">Brand</label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full mt-2 border p-2 rounded"
            >
              <option value="">All Brands</option>
              {fragrances
                .map(frag => frag.house)
                .filter((value, index, self) => self.indexOf(value) === index) 
                .map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 sm:py-16 sm:px-4 md:px-6 md:py-16 lg:px-8 lg:py-24 xl:py-32 xl:px-32">
        {filteredFragrances.map((frag) => (
          <div
            key={frag.id}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between"
          >
            <div>
              <img
                src={frag.image}
                alt={frag.name}
                className="w-full h-64 object-contain sm:h-48 md:h-56 lg:h-64"
              />
            </div>

            <div className="p-4 flex-grow">
              <h3 className="text-xl font-semibold">{frag.name}</h3>
              <p className="text-gray-600">{frag.house}</p>
              <p className="text-lg text-orange-600 font-bold mt-2">
                LKR {frag.price.toLocaleString()}
              </p>
            </div>

            <div className="mt-auto">
              <Link to={`/collection/${frag.id}`}>
                <button className="w-full bg-[#1F3357] text-white py-2 hover:bg-[#152B4F]">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
