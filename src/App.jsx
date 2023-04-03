import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
