import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import About from './page/About';
import Home from './page/Home';
import Users from './page/Users';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
