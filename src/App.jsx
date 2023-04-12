import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import NewPetPage from "./pages/NewPetPage/NewPetPage";
import PetListPage from "./pages/PetListPage/PetListPage";
import PetProfile from "./pages/PetProfile/PetProfile";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/pets/new" element={<NewPetPage />} />
          <Route path="/pets" element={<PetListPage />} />
          <Route path="/pets/:id" element={<PetProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
