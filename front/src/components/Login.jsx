import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      url: "http://localhost:8000/tokens",
      method: "POST",
      data: { password, username },
    });
    //console.log(response.data.token);
    if (response.data.token) {
      dispatch(login(response.data));
      navigate("/");
    } else {
      navigate("/errorPage?msg=Error en login");
    }
  };

  return (
    <section className="container">
      <div className="sub_container">
        <div className="container_blue">
          <div className="top">
            <img id="icone_tweeter" src="img/twitter.png" alt="" />
          </div>
          <div className="down">
            <h2>
              Hey! Nice to see you again{" "}
              <img id="emoji" src="img/emoji.png" alt="" />
            </h2>
          </div>
        </div>
        <div className="container_white">
          <div className="container_white_int">
            <h2>Login</h2>
            <br />
            <p>Ready to star using Twitter?</p>
            <br />
            <form action="" onSubmit={handleSubmit} />
            <input
              type="email"
              className="input form-control"
              id="email"
              name="email"
              placeholder="Username or Email"
            />
            <br />
            <input
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              value={password}
              className="input form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit" className="button">
              Login
            </button>
            <div className="text-end">
              <p>
                Don't have an account?
                <Link to="/registro" className="signup">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
