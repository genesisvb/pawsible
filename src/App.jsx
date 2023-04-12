import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
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
