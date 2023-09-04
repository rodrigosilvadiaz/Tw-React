import { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <section className="container">
        <div className="sub_container">
          <div className="container_blue">
            <div className="top">
              <img id="icone_tweeter" src="img/twitter.png" alt="" />
            </div>
            <div className="down">
              <h2>
                Hi! Welcome to Twitter Copy
                <img id="emoji" src="img/emoji2.png" alt="" />
              </h2>
            </div>
          </div>
          <div className="container_white">
            <div className="container_white_int">
              <h2>Sign up</h2>
              <br />
              <p>Create an account and start using Twitter</p>
              <br />
              <form
                action="/signup"
                method="post"
                enctype="multipart/form-data"
              >
                <input
                  type="text"
                  className="input form-control"
                  id="firstname"
                  name="firstname"
                  placeholder="Firstname"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <br />
                <input
                  type="text"
                  className="input form-control"
                  id="lastname"
                  name="lastname"
                  placeholder="Lastname"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
                <br />
                <input
                  type="email"
                  className="input form-control"
                  id="email"
                  name="email"
                  placeholder="Username or Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <input
                  type="text"
                  className="input form-control"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <br />
                <div className="file-input-container">
                  <label className="custom-file-upload" htmlFor="avatar">
                    <p>Choose file</p>
                  </label>
                  <input type="file" id="avatar" name="avatar" />
                </div>
                <input
                  type="password"
                  className="input form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit" className="button">
                  Sign up
                </button>
                <div className="text-end">
                  <p>
                    Already have an account?{" "}
                    <Link to="/iniciar-sesion" className="signup">
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
