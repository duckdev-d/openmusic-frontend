import { Routes, Route, useLocation } from "react-router-dom";
import LoginPage from "./pages/LogIn/LogIn";
import SignUpPage from "./pages/SingUp/SingUp";
import HomePage from "./pages/Home/Home";
import SearchPage from "./pages/Search/Search";
import FavouritesPage from "./pages/Favourites/Favourites";
import PlaylistsPage from "./pages/Playlists/Playlists";
import Menu from "./components/Menu/Menu";
import "./App.css";
import PlayerBar from "./components/PlayerBar/PlayerBar";

function App() {
  const location = useLocation();

  const notAppPage =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="app">
      {!notAppPage && (
        <Menu
          iconWidth="1.7vw"
          height="95vh"
          width="4vw"
          borderRadius="1vw"
          gap="1.5vw"
        />
      )}

      {!notAppPage ? (
        <div className="current-page">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
            <Route path="/playlists" element={<PlaylistsPage />} />
          </Routes>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      )}

      {!notAppPage ? <PlayerBar /> : <></>}
    </div>
  );
}

export default App;
