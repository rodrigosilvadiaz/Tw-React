import { useEffect } from "react";
import UsersList from "./UsersList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";

function Home() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user) return navigate("/iniciar-sesion");
  }, []);

  return (
    <div className="container">
      <UsersList />
      <h1>Bien</h1>
    </div>
  );
}

export default Home;
