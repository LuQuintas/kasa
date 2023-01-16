import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/pages/AboutPage";
import ErrorPage from "./components/pages/ErrorPage";
import LogementPage from "./components/pages/LogementPage";
import HomePage from "./components/pages/homePage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/logements" element={<LogementPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
