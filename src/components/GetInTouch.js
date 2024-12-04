import { Link } from "react-router-dom";
import { images } from "../assets/products";


const GetInTouch = () => {
    return ( 
        <div className="relative bg-cover bg-center sm:h-[350px] md:h-[400px] lg:h-[450px]" style={{ backgroundImage: `url(${images.img12})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
                <p className="text-white-800 mb-4">
                Reach out to us for any questions or assistance. We're here to help!
                </p>
                <Link to='/contact'>
                    <button className="mt-4 px-6 py-3 bg-[#1F3357] hover:bg-[#152B4F] rounded-md text-white font-semibold">
                        Send a Message
                    </button>
                </Link>
            </div>
        </div>
     );
}
 
export default GetInTouch;