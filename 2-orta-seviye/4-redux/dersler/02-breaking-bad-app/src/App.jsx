import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Location from './pages/Location';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location" element={<Location />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
