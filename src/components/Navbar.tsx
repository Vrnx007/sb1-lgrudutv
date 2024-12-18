import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Car, Menu } from 'lucide-react';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">CarConnect</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Home
            </Link>
            <Link to="/compare" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Compare Cars
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Gallery
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2">
              Services
            </Link>
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Login
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-gray-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;