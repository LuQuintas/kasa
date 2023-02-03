import { Route, Routes } from "react-router-dom";
import "./App.css";
import AboutPage from "./components/pages/about/AboutPage";
import ErrorPage from "./components/pages/error/ErrorPage";
import LogementPage from "./components/pages/logement/LogementPage";
import HomePage from "./components/pages/home/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/logement/:id" element={<LogementPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
