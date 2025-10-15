import { Route, Routes } from 'react-router';
import './App.css';
import Edit from './components/Edit';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
