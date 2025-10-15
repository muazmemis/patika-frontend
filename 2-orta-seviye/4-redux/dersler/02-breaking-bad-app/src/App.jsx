import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Detail from './pages/Detail';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
