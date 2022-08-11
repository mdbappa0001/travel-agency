import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Home/Home';

function App() {
  return (
    <>
    <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home />}></Route>
     </Routes>
    </>
  );
}

export default App;
