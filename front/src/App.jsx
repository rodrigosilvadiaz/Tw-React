import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </>
  );
}

export default App;
