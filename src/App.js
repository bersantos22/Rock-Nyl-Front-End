import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { Login } from "./Pages/Login/index";
import { SignUp } from "./Pages/SignUp";
import { NavBar } from "./Components/NavBar/NavBar";
import { Homepage } from "./Pages/HomePage/Homepage";
import { ArtistList } from "./Pages/ArtistList/ArtistList";
import { AlbumList } from "./Pages/AlbumList/AlbumList";
import { ProductPage } from "./Pages/ProductPage/ProductPage";
import { AlbunsArtist } from "./Pages/AlbunsArtist/AlbunsArtist";
import { MyAccount } from "./Pages/MyAccount/MyAccount";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import {AuthContextComponent} from './contexts/authContext'
import {EditAccount} from './Pages/EditAccount/EditAccount'

function App() {
  return (
    <BrowserRouter>
    <AuthContextComponent>
      <div className="appClass">
        <NavBar />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/artists-list" element={<ArtistList />} />
          <Route path="/genres-list" element={<AlbumList />} />
          <Route path="/product/album/:id" element={<ProductPage />} />
          <Route path="/product/artist/:artist" element={<AlbunsArtist />} />
          
          <Route
            path="/myAccount"
            element={<ProtectedRoute component={MyAccount} />}
          />
          <Route
          path="/editAccount"
          element={<ProtectedRoute component={EditAccount} />}
          />

        </Routes>

        <Footer />
      </div>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
