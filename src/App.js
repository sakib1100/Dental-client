import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Shared/Navbar';
import Home from './Page/Home';
import About from './Page/About';
import Login from './Page/Login';
import Appoinment from './Appoinment/Appoinment';
import SignIn from './Page/SignIn';
import RequireAuth from './Page/RequireAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Page/Dashboard/Dashboard';
import MyAppoinment from './Page/Dashboard/MyAppoinment';
import MyReview from './Page/Dashboard/MyReview';

function App() {
  return (
    <div>
<Navbar></Navbar>
<Routes>
  <Route path='' element={<Home></Home>}></Route>
  <Route path='/home' element={<Home></Home>}></Route>
  <Route path='/about' element={<About></About>}></Route>
  <Route path='/appoinment' element={<RequireAuth>
    <Appoinment></Appoinment>
  </RequireAuth>}></Route>
  <Route path='dashboard' element={<RequireAuth>
   <Dashboard></Dashboard>
  </RequireAuth>}>
<Route index element={<MyAppoinment></MyAppoinment>}></Route>
<Route path='myReview' element={<MyReview></MyReview >}></Route>
  </Route>
  <Route path='/login' element={<Login></Login>}></Route>
  <Route path='/signin' element={<SignIn></SignIn>}></Route>
</Routes>
<ToastContainer />
    </div>
  );
}

export default App;
