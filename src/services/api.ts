import axios from 'axios';

const api = axios.create({
  baseURL: '/api'
});

// Add token to requests if it exists
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  register: async (userData: { name: string; email: string; password: string }) => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },
  verifyToken: async () => {
    const response = await api.get('/auth/verify');
    return response.data;
  }
};

export const carAPI = {
  getAllCars: async () => {
    const response = await api.get('/cars');
    return response.data;
  },
  getCarById: async (id: string) => {
    const response = await api.get(`/cars/${id}`);
    return response.data;
  },
  compareCars: async (carIds: string[]) => {
    const response = await api.post('/cars/compare', { carIds });
    return response.data;
  }
};

export default api;