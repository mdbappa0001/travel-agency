import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Home/Home';
import AvailableTours from './Pages/AvailableTours/AvailableTours';
import Login from './Pages/Accounts/Login';
import SignUp from './Pages/Accounts/SignUp';
import RequireAuth from './Pages/Accounts/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/DashBoard/DashBoard';
import MyBooking from './Pages/DashBoard/MyBooking';
import Users from './Pages/DashBoard/Users';
import MyProfile from './Pages/DashBoard/MyProfile';

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

        <Route path='/dashboard' element={
          <Dashboard></Dashboard>
        }>
          <Route index element={<MyBooking></MyBooking>}></Route>
          <Route path='/dashboard/profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/users' element={<Users></Users>}></Route>
        </Route>

      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
