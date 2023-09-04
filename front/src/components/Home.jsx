import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import UsersList from "./UsersList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './Nav&Side.css'
import Nav from "./Nav";
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Home.css";
import Side from "./Side";

function Home() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user) return navigate("/iniciar-sesion");
  },);

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <Nav/>
        </div>
        <div className="col-6 border-start border-end">
            <h2>Home</h2>
            <div className="img_campo border-bottom">
                <img className="img_c" src="" alt="" />
              <div className="form_twit">
                <form action="/home" method="post">
                  <input
                    className="campo"
                    name="tweetText"
                    placeholder="What's happening"
                    type="text"
                    maxLength="140"
                    required
                  />
                  <div className="btn_tweet">
                    <button className="boton_tweet" type="submit">Tweet</button>
                  </div>
                </form>
              </div>
            </div>

  
        </div>
        <div className="col-3 d-none d-xl-block d-lg-block">
          <Side/>
        </div>
      </div>
    </div>
  );
}

export default Home;
