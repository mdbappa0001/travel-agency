import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Home/Home';
import AvailableTours from './Pages/AvailableTours/AvailableTours';

function App() {
  return (
    <>
    <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/tour' element={<AvailableTours />}></Route>
     </Routes>
    </>
  );
}

export default App;
