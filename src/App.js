import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Details from './components/Details';

const App = () => (
  <div className="App">
    <Navbar />
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display" element={<Details />} />
      </Routes>
    </div>
  </div>
);

export default App;
