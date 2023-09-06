import React from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Users from "./UsersList";
import { useEffect } from "react";
import UsersList from "./UsersList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const tweets = useSelector((state) => state.user.tweets);

  useEffect(() => {
    if (!user) return navigate("/iniciar-sesion");
  });

  return (
    <div className="profile">
      <section className="container_h">
        <div className="sub_container_h">
          <div className="left_h">
            <div className="l_left"></div>
            <div className="l_right">
              <div className="sticky-content">
                <div className="lt">
                  <Link to="/">
                    <img className="image_h" src="img/logo_azul.png" alt="" />
                  </Link>
                </div>
                <br />
                <div className="lh">
                  <img className="image_h" src="img/house2.png" alt="" />
                  <Link to="/Home">Home</Link>
                </div>
                <br />
                <div className="lp">
                  <img className="image_h" src="img/user3.png" alt="" />
                  <Link to="/perfil">Profile</Link>
                </div>
                <br />
                <br />
                <div>
                  <button className="newtweet">Tweet</button>
                </div>
              </div>
            </div>
          </div>

          <div className="center_h">
            <div className="center_container">
              <div className="profile-header">
                <div className="skyblue-section">
                  <img
                    src="/public/img/WhatsApp Image 2023-07-03 at 21.00.23.jpeg"
                    alt="Profile Avatar"
                    className="avatar"
                  />
                </div>
              </div>
              <div className="white-section">
                <div>
                  <div className="me-3">
                    <span className="fw-bold">{user.firstname}</span>
                    <p className="profile-username">@email</p>
                  </div>
                </div>
                <div className="contador ">
                  <p className="mb-0 me-3">
                    <a
                      className="follows_ text-decoration-none "
                      href="/followers"
                    >
                      {" "}
                      @followers{" "}
                    </a>
                  </p>
                  <p className="mb-0">
                    <a
                      className="follows_ text-decoration-none "
                      href="/following"
                    >
                      {" "}
                      Following
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="card_">
              <div className="card_interior">
                <div className="card_interior_left">
                  <div className="card_interior_img">
                    <img
                      className="img_user"
                      src="/public/img/WhatsApp Image 2023-07-03 at 21.00.23.jpeg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="card_interior_right">
                  <div className="info_card">
                    <div>
                      <h4>@firstname @lastname</h4>
                    </div>
                    <div className="paragrph_">
                      <p>
                        @username - Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Aperiam, nemo.
                      </p>
                    </div>
                  </div>
                  <div className="text_card">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Distinctio, ipsum nemo ipsam dolore molestiae architecto
                      accusamus optio molestias neque officia, labore rem
                      laboriosam cum placeat, veniam a at sint velit ad!
                      Voluptatum mollitia a fugit tempore, vitae itaque eligendi
                      laboriosam ab cumque voluptate natus quis totam, alias
                      facilis laborum rem.
                    </p>
                  </div>
                  <div className="btns_card">
                    <div className="lik_btn">
                      <a className="clikes" href="/" />
                      <img className="hart_" src="img/hart.png" alt="" />
                      <a className="clikes" href="#">
                        likes
                      </a>
                    </div>
                    <form action="/delete" method="post">
                      <button type="submit" className="delete_btn">
                        <svg
                          className="trash"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="red"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="r_left">
              <div className="cont_top">
                <h3>What's happening</h3>
                <div className="sc_top">
                  <p>Programing . Trending</p>
                  <h4>#MongoVsSequialize</h4>
                  <p>97.5K Tweets</p>
                </div>
                <div className="sc_top">
                  <p>Programing . Trending</p>
                  <h4>#MongoVsSequialize</h4>
                  <p>97.5K Tweets</p>
                </div>
                <div className="sc_top">
                  <p>Programing . Trending</p>
                  <h4>#MongoVsSequialize</h4>
                  <p>97.5K Tweets</p>
                </div>
              </div>

              <div className="cont_top">
                <h3>What's happening</h3>
                <div className="card_info">
                  <img className="image_user" src="img/user1.png" alt="" />
                  <div>
                    <h4>Hack academy</h4>
                    <p>@HackAcademyDev</p>
                  </div>
                  <button className="btn" type="submit">
                    Follow
                  </button>
                </div>
                <div className="card_info">
                  <img className="image_user" src="img/user1.png" alt="" />
                  <div>
                    <h4>Hack academy</h4>
                    <p>@HackAcademyDev</p>
                  </div>
                  <button className="btn" type="submit">
                    Follow
                  </button>
                </div>
                <div className="card_info">
                  <img className="image_user" src="img/user1.png" alt="" />
                  <div>
                    <h4>Hack academy</h4>
                    <p>@HackAcademyDev</p>
                  </div>
                  <button className="btn" type="submit">
                    Follow
                  </button>
                </div>
                <div className="card_info">
                  <img className="image_user" src="img/user1.png" alt="" />
                  <div>
                    <h4>Hack academy</h4>
                    <p>@HackAcademyDev</p>
                  </div>
                  <button className="btn" type="submit">
                    Follow
                  </button>
                </div>
                <div className="card_info">
                  <img className="image_user" src="img/user1.png" alt="" />
                  <div>
                    <h4>Hack academy</h4>
                    <p>@HackAcademyDev</p>
                  </div>
                  <button className="btn" type="submit">
                    Follow
                  </button>
                </div>
              </div>

              <div></div>
            </div>
            <div className="r_right"></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
