import { useState } from 'react';
import { Car } from '../types';

const CarComparison = () => {
  const [selectedCars, setSelectedCars] = useState<Car[]>([]);

  const cars: Car[] = [
    {
      id: 1,
      name: 'MG HECTOR PLUS',
      price: '20.56 - 27.38 lakh',
      engine: '2.0L Turbocharged',
      power: '168 bhp',
      transmission: '6-speed Manual/Automatic',
      mileage: '15.5 kmpl',
      features: ['Panoramic Sunroof', 'Connected Car Tech', '6/7 Seater Option']
    },
    {
      id: 2,
      name: 'Innova Hycross',
      price: '22.00 - 35.93 lakh',
      engine: '2.0L Strong Hybrid',
      power: '183 bhp',
      transmission: 'e-CVT',
      mileage: '21.1 kmpl',
      features: ['ADAS', 'Hybrid Technology', 'Ottoman Seats']
    },
    {
      id: 3,
      name: 'Jeep Compass',
      price: '24.33 - 37.99 lakh',
      engine: '2.0L MultiJet Diesel',
      power: '168 bhp',
      transmission: '9-speed Automatic',
      mileage: '17.1 kmpl',
      features: ['4x4 Capability', 'Premium Interiors', 'Advanced Safety']
    }
  ];

  const handleCarSelect = (car: Car) => {
    if (selectedCars.length < 2) {
      setSelectedCars([...selectedCars, car]);
    } else {
      alert('You can only compare two cars at a time');
    }
  };

  const handleRemoveCar = (carId: number) => {
    setSelectedCars(selectedCars.filter(car => car.id !== carId));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Car Comparison</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {selectedCars.map(car => (
          <div key={car.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{car.name}</h2>
              <button
                onClick={() => handleRemoveCar(car.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
            <div className="space-y-4">
              <p><span className="font-semibold">Price:</span> {car.price}</p>
              <p><span className="font-semibold">Engine:</span> {car.engine}</p>
              <p><span className="font-semibold">Power:</span> {car.power}</p>
              <p><span className="font-semibold">Transmission:</span> {car.transmission}</p>
              <p><span className="font-semibold">Mileage:</span> {car.mileage}</p>
              <div>
                <span className="font-semibold">Key Features:</span>
                <ul className="list-disc ml-6 mt-2">
                  {car.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCars.length < 2 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Select Cars to Compare</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cars.map(car => (
              <button
                key={car.id}
                onClick={() => handleCarSelect(car)}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
                disabled={selectedCars.some(selected => selected.id === car.id)}
              >
                {car.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CarComparison;