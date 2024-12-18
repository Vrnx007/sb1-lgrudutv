import { useState } from 'react';

const Gallery = () => {
  const cars = [
    {
      id: 1,
      name: 'MG HECTOR PLUS',
      price: '₹20.56 - 27.38 lakh',
      image: 'https://imgd.aeplcdn.com/1280x720/n/cw/ec/45184/hector-plus-exterior-right-front-three-quarter-7.jpeg?q=80'
    },
    {
      id: 2,
      name: 'Innova Hycross',
      price: '₹22.00 - 35.93 lakh',
      image: 'https://static.toyotabharat.com/images/showroom/innova-hycross/sparkling-black-pearl-crystal-shine.png'
    },
    {
      id: 3,
      name: 'Jeep Compass',
      price: '₹24.33 - 37.99 lakh',
      image: 'https://content.carlelo.com/uploads/variant-option/MAsRrpcocZiayRW3e0hJVP60a6QEN84zWga5rFAi.webp'
    }
  ];

  const budgetCars = [
    {
      id: 4,
      name: 'Mahindra XUV 3XO',
      price: '₹7.50 - 13.00 lakh',
      image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-33.jpeg?isig=0&wm=0&q=80'
    },
    {
      id: 5,
      name: 'Maruti Swift',
      price: '₹5.99 - 9.03 lakh',
      image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/159099/swift-exterior-right-front-three-quarter.jpeg?isig=0&q=80'
    },
    {
      id: 6,
      name: 'Toyota Glanza',
      price: '₹6.81 - 10.00 lakh',
      image: 'https://imgd.aeplcdn.com/664x374/n/cw/ec/112839/glanza-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Car Gallery</h1>

        {/* Premium Cars Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Premium Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <p className="text-gray-600">{car.price}</p>
                  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Budget Cars Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Budget-Friendly Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {budgetCars.map((car) => (
              <div key={car.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <p className="text-gray-600">{car.price}</p>
                  <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;