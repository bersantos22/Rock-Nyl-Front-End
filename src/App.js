import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./Components/NavBar/NavBar";
import { Homepage } from "./Pages/HomePage/Homepage";
import { Footer } from "./Components/Footer/Footer";
import { ArtistList } from "./Pages/ArtistList/ArtistList";

function App() {
  return (
    <BrowserRouter>
      <div className="appClass">
        <NavBar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/artists-list" element={<ArtistList />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
