import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  engine: {
    type: String,
    required: true,
  },
  power: {
    type: String,
    required: true,
  },
  transmission: {
    type: String,
    required: true,
  },
  mileage: {
    type: String,
    required: true,
  },
  features: [{
    type: String,
  }],
  image: {
    type: String,
  }
});

export default mongoose.model('Car', carSchema);