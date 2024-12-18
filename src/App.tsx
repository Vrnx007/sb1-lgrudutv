import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import CarComparison from './pages/CarComparison';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/compare" element={<CarComparison />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;