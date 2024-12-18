import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Car } from 'lucide-react';

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const featuredCars = [
    {
      id: 1,
      name: 'Kia EV9',
      image: 'https://gaadiwaadi.com/wp-content/uploads/2024/03/kia-ev9-india-840x420.jpg',
      description: 'Coming Soon'
    },
    {
      id: 2,
      name: 'Grand Vitara 7-Seater',
      image: 'https://gaadiwaadi.com/wp-content/uploads/2024/01/grand-vitara-7-seater-rendering-740x436.jpg',
      description: 'Launching Soon'
    },
    {
      id: 3,
      name: 'BMW 7 Series & i7',
      image: 'https://images.carandbike.com/cms/articles/3204531/BMW_7_Series_2022_12_09_T16_13_27_070_Z_3539ac187a.jpeg',
      description: 'Premium Luxury'
    }
  ];

  const carBrands = [
    { name: 'TOYOTA', logo: 'https://www.carlogos.org/logo/Toyota-logo.png' },
    { name: 'FORD', logo: 'https://www.pngkey.com/png/detail/416-4160943_ford-car-logos-png-car-brand-logos-single.png' },
    { name: 'PORSCHE', logo: 'https://www.shutterstock.com/shutterstock/photos/2279536483/display_1500/stock-vector-porsche-logo-art-icon-emblem-sign-isolated-gold-black-red-white-symbol-template-design-2279536483.jpg' },
    { name: 'RANGE ROVER', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/LandRover.svg/1200px-LandRover.svg.png' }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-cover bg-center" style={{ 
        backgroundImage: `url('https://media.licdn.com/dms/image/v2/C4D1BAQG0ZYJqu4JSDA/company-background_10000/company-background_10000/0/1599438106383/bennett_automotive_group_cover?e=2147483647&v=beta&t=v9eOneXeq31hAKBmVPoW5XL0_vKs8I9SyybXASSX9Tk')`
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Welcome to CarConnect</h1>
            <p className="text-xl mb-8">Find and Compare Your Dream Car</p>
            <Link to="/compare" className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Compare Cars
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Cars Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform">
              <img src={car.image} alt={car.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                <p className="text-gray-600">{car.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Car Brands Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {carBrands.map((brand, index) => (
              <div key={index} className="flex flex-col items-center">
                <img src={brand.logo} alt={brand.name} className="h-24 object-contain mb-4" />
                <p className="text-lg font-semibold">{brand.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose CarConnect</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <Car className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Extensive Car Database</h3>
            <p className="text-gray-600">Access detailed information about thousands of cars</p>
          </div>
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <Car className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Expert Reviews</h3>
            <p className="text-gray-600">Get insights from automotive experts</p>
          </div>
          <div className="text-center p-6">
            <div className="flex justify-center mb-4">
              <Car className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Easy Comparison</h3>
            <p className="text-gray-600">Compare different cars side by side</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;