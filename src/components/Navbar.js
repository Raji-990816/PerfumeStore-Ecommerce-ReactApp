import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 m-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <h1>Perfume Store</h1>
        </div>
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/collection" className="hover:text-gray-300">Collection</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </div>
        <div className="space-x-6 hidden md:flex">
          <Link to="/login" className="hover:text-gray-300">Login</Link>
          <Link to="/register" className="hover:text-gray-300">Register</Link>
          <Link to="/cart" className="hover:text-gray-300">Cart</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-white">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
