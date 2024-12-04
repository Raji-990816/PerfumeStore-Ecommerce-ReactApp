import { images } from "../assets/products";
import VisionMission from "../components/VisionMission";

const About = () => {
    return ( 
        <div className="flex flex-col min-h-screen bg-gray-100">
            <main className="flex-1 ">
                <div className="relative bg-cover bg-center sm:h-[350px] md:h-[400px] lg:h-[250px]" style={{ backgroundImage: `url(${images.img8})` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-center px-4">
                        <h1 className="text-3xl font-bold text-center  mb-4">A Story of Elegance and Passion</h1>
                        <p className="text-lg text-center mb-8">
                         We believe in more than just selling perfumes – we craft scent stories that last a lifetime.
                        </p>                    
                    </div>
                </div>
                <div className="p-16 mx-64 my-28 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Welcome to Perfume Store, your ultimate destination for luxurious and enchanting fragrances. 
                        At Perfume Store, we believe that a scent is more than just a fragrance – it's an experience, a memory, and a personal signature. 
                        Our mission is to bring you the finest selection of perfumes that inspire confidence, evoke emotions, and celebrate individuality.<br/><br/>
                        Our Story Founded in 2020, Perfume Store began as a passion project to curate the world’s most exquisite perfumes. 
                        Starting with a small boutique, we have grown into a trusted online destination for fragrance enthusiasts worldwide. 
                        Our carefully selected collection features timeless classics, niche creations, and the latest trends in the perfume world.
                    </p>
                </div>
                <VisionMission />
            </main>
        </div>
     );
}

export default About;
