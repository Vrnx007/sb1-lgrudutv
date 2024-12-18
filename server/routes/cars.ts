import express from 'express';
import Car from '../models/Car';
import authMiddleware from '../middleware/auth';

const router = express.Router();

// Get all cars
router.get('/', async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching cars' });
  }
});

// Get car by ID
router.get('/:id', async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching car' });
  }
});

// Compare cars (protected route)
router.post('/compare', authMiddleware, async (req, res) => {
  try {
    const { carIds } = req.body;
    const cars = await Car.find({ _id: { $in: carIds } });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Error comparing cars' });
  }
});

export default router;