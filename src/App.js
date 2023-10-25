import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Shared/Navbar';
import Home from './Page/Home';
import About from './Page/About';
import Login from './Page/Login';
import Appoinment from './Appoinment/Appoinment';
import SignIn from './Page/SignIn';
import RequireAuth from './Page/RequireAuth';

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
  <Route path='/login' element={<Login></Login>}></Route>
  <Route path='/signin' element={<SignIn></SignIn>}></Route>
</Routes>
    </div>
  );
}

export default App;
