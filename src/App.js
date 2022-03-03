import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './Components/NavBar/NavBar';
import { Homepage } from './Pages/HomePage/Homepage';
import { Footer } from './Components/Footer/Footer';
import { Signup }from "./Pages/auth/Signup";
import { Login } from "./Pages/auth/Login";

function App() {
  return (

   
    <BrowserRouter>
    <div className='appClass'>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    <Footer/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
