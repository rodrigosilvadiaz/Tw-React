import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/iniciar-sesion" element={<Login />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/profile" element={<Navigate replace to="/perfil" />} />
      </Routes>
    </>
  );
}

export default App;
