import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from './Components/Footer/Footer';
import { Login } from './Pages/Login/index';
import { SignUp } from './Pages/SignUp';
import { NavBar } from "./Components/NavBar/NavBar";
import { Homepage } from "./Pages/HomePage/Homepage";
import { ArtistList } from "./Pages/ArtistList/ArtistList";
import { AlbumList } from "./Pages/AlbumList/AlbumList";
import { ProducPage } from "./Pages/ProductPage/ProductPage";


function App() {
  return (
    <BrowserRouter>
      <div className="appClass">
        <NavBar />


      <Routes>
        <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/artists-list" element={<ArtistList />} />
          <Route path="/genres-list" element={<AlbumList />} />
          <Route path="/product-test" element={<ProducPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
