import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from './Components/NavBar/NavBar';
import { Homepage } from './Pages/HomePage/Homepage';
import { Footer } from './Components/Footer/Footer';
import { Login } from './Pages/Login/index';
import { SignUp } from './Pages/SignUp';


function App() {
  return (

   
    <BrowserRouter>
    <div className='appClass'>
      <NavBar/>

      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
      </Routes>

    <Footer/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
