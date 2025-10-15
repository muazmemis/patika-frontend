import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Location from './pages/Location';
import LocationDetail from './pages/LocationDetail';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<LocationDetail />} />
      </Routes>
    </>
  );
}

export default App;
