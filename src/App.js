import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/pages/About";
import ErrorPage from "./components/pages/ErrorPage";
import Home from "./components/pages/Home";
import Logements from "./components/pages/Logements";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logements" element={<Logements />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
