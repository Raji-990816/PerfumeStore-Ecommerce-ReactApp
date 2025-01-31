import fragrances from "../assets/products";
import { Link } from "react-router-dom";

const BestSellers = () => {
    return ( 
      <div className="py-16 px-10 sm:px-0 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7">
          {fragrances
            .filter((frag) => frag.bestSellers) 
            .map((frag) => (
              <div key={frag.id} className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col justify-between">
                <div>
                <img
                  src={frag.image}
                  alt={frag.name}
                  className="w-full h-40 object-contain"
                />
                </div>
                <div className="p-4 flex-grow">
                  <h3 className="text-md sm:text-lg font-semibold">{frag.name}</h3>
                  <p className="text-sm sm:text-md text-gray-600">{frag.house}</p>
                  <p className="text-sm sm:text-md text-orange-600 font-bold mt-2">LKR {frag.price.toLocaleString()}</p>
                </div>
                <div className="mt-auto">
                  <Link to={`/collection/${frag.id}`}>
                    <button to className="w-full text-sm sm:text-md bg-[#1F3357] text-white py-2 hover:bg-[#152B4F]">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
     );
}
 
export default BestSellers;