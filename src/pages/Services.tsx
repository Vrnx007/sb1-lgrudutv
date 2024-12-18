import ServiceCard from '../components/services/ServiceCard';
import BookingForm from '../components/services/BookingForm';
import { services } from '../data/services';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              image={service.image}
            />
          ))}
        </div>

        <BookingForm services={services} />
      </div>
    </div>
  );
};

export default Services;