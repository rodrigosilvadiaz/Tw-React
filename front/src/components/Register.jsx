import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/userSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Register() {
  const { register, handleSubmit } = useForm();

  const registerSubmit = handleSubmit(async (values) => {
    const response = await axios({
      url: "http://localhost:8000/register",

      method: "POST",

      data: values,
    });

    console.log(values);
  });

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

              <form onSubmit={registerSubmit}>
                <input
                  type="text"
                  className="input form-control"
                  id="firstname"
                  name="firstname"
                  placeholder="Firstname"
                  {...register("firstname")}
                />

                <br />

                <input
                  type="text"
                  className="input form-control"
                  id="lastname"
                  name="lastname"
                  placeholder="Lastname"
                  {...register("lastname")}
                />

                <br />

                <input
                  type="email"
                  className="input form-control"
                  id="email"
                  name="email"
                  placeholder="Username or Email"
                  {...register("email")}
                />

                <br />

                <input
                  type="text"
                  className="input form-control"
                  id="username"
                  name="username"
                  placeholder="Username"
                  {...register("username")}
                />

                <br />

                {/* <div className="file-input-container">

                  <label className="custom-file-upload" htmlFor="avatar">

                    <p>Choose file</p>

                  </label>

                  <input type="file" id="avatar" name="avatar" />

                </div> */}

                <input
                  type="password"
                  className="input form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  {...register("password")} // Use react-hook-form register here
                />

                <br />

                <button href="/iniciar-sesion" type="submit" className="button">
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
