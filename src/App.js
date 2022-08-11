import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Home/Home';
import AvailableTours from './Pages/AvailableTours/AvailableTours';
import Login from './Pages/Accounts/Login';
import SignUp from './Pages/Accounts/SignUp';
import RequireAuth from './Pages/Accounts/RequireAuth';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>

        <Route path='/tour' element={
          <RequireAuth>
            <AvailableTours />
          </RequireAuth>
        }></Route>

      </Routes>
    </>
  );
}

export default App;
