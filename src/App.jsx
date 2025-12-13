import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Player from "./pages/Player";
import TvShow from "./pages/TvShow";
import Netflix from "./pages/Netflix";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Netflix/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SignUpPage />} />
        <Route path="/player" element={<Player />} />
        <Route path="/tvshow" element={<TvShow />} />
        <Route path="/moviepage" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
