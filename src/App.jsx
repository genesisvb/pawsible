import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import IntakePage from "./pages/IntakePage/IntakePage";
import ShelterArea from "./components/ShelterArea/ShelterArea";
import Tasks from "./components/Tasks/Tasks";
import Review from "./components/Review/Review";
import NewPetPage from "./pages/NewPetPage/NewPetPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/pets/new" element={<NewPetPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
