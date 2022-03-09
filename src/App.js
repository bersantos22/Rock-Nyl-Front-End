import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/* import { Footer } from "./Components/Footer/Footer"; */
import { Login } from "./Pages/Login/index";
import { SignUp } from "./Pages/SignUp";
import { Homepage } from "./Pages/HomePage/Homepage";
import { ArtistList } from "./Pages/ArtistList/ArtistList";
import { AlbumList } from "./Pages/AlbumList/AlbumList";
import { ProductPage } from "./Pages/ProductPage/ProductPage";
import { AlbunsArtist } from "./Pages/AlbunsArtist/AlbunsArtist";
import { CreateProduct } from "./Pages/CreateProduct/CreateProduct";
import { MyAccount } from "./Pages/MyAccount/MyAccount";
import { ProtectedRoute } from "./Components/ProtectedRoute";
import { AuthContextComponent } from "./contexts/authContext";
import { EditAccount } from "./Pages/EditAccount/EditAccount";
import { EditProduct } from "./Pages/EditProduct/EditProduct";
import { ForgotPassword } from "./Pages/ForgotPassword/ForgotPassword";
import { NewPassword } from "./Pages/NewPassword/NewPassword";
import { Footer2 } from "./Components/Footer/Footer2";
import {NavBar2} from "./Components/NavBar/NavBar2"


function App() {
  return (
    <BrowserRouter>
      <AuthContextComponent>
        <div className="appClass">
      
          <NavBar2 /> 
        

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/artists-list" element={<ArtistList />} />
            <Route path="/albuns-list" element={<AlbumList />} />
            <Route path="/product/album/:id" element={<ProductPage />} />
            <Route path="/product/artist/:artist" element={<AlbunsArtist />} />
            <Route path="/adm/create-product" element={<CreateProduct />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/new-password/:token" element={<NewPassword />} />
            <Route
              path="/myAccount"
              element={<ProtectedRoute component={MyAccount} />}
            />
            <Route
              path="/editAccount"
              element={<ProtectedRoute component={EditAccount} />}
            />

            <Route
              path="/edit-product/:id"
              element={<ProtectedRoute component={EditProduct} />}
            />
          </Routes>
          
          <Footer2 />
        </div>
      </AuthContextComponent>
    </BrowserRouter>
  );
}

export default App;
