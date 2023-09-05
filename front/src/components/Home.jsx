import { useEffect } from "react";
import UsersList from "./UsersList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const tweets = useSelector((state) => state.user.tweets);

  useEffect(() => {
    if (!user) return navigate("/iniciar-sesion");
  });

  return (
    <div className="container">
      {user && (
        <div>
          <a id="top"></a>
          <section className="container_h">
            <div className="sub_container_h">
              <div className="left_h">
                <div className="l_left"></div>
                <div className="l_right">
                  <div className="sticky-content">
                    <div className="lt">
                      <a href="/">
                        <img
                          className="image_h"
                          src="img/logo_azul.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <br />
                    <div className="lh">
                      <img className="image_h" src="img/house2.png" alt="" />
                      <a href="/home">Home</a>
                    </div>
                    <br />
                    <div className="lp">
                      <img className="image_h" src="img/user3.png" alt="" />
                      <a href="/profile">Profile</a>
                    </div>
                    <br />
                    <br />
                    <div>
                      <a className="newtweet" href="">
                        Tweet
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="center_h">
                <div className="center_container">
                  <div className="title_cc">
                    <h2>Home</h2>
                  </div>
                  <div className="img_campo">
                    <img className="img_c" src={user.avatar} alt="" />
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
                          <button className="boton_tweet" type="submit">
                            Tweet
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {tweets.map((tweet) => (
                  <div className="center_bottom" key={tweet.id}>
                    <div className="cc_">
                      <div className="cc_top">
                        <div className="cc_right">
                          <img className="image_tw" src={user.avatar} alt="" />
                        </div>
                      </div>
                      <div className="cc_bottom">
                        <div className="ccc_t">
                          <h4>
                            {user.firstname} {user.lastname}
                          </h4>
                          <p>@{user.username}</p>
                        </div>
                        <div className="ccc_m">
                          {console.log({ user })}
                          <p>{tweet.content}</p>
                        </div>
                        <div className="ccc_b">
                          <a href="">
                            <img src="" alt="" />
                            <p>♥ </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="right">
                <div className="r_left">
                  <div className="cont_top">
                    <h3>What's happening</h3>
                    <div className="sc_top">
                      <p>Programming . Trending</p>
                      <h4>#MongoVsSequialize</h4>
                      <p>97.5K Tweets</p>
                    </div>
                    <div className="sc_top">
                      <p>Programming . Trending</p>
                      <h4>#MongoVsSequialize</h4>
                      <p>97.5K Tweets</p>
                    </div>
                    <div className="sc_top">
                      <p>Programming . Trending</p>
                      <h4>#MongoVsSequialize</h4>
                      <p>97.5K Tweets</p>
                    </div>
                  </div>
                  <div className="cont_top">
                    <h3>What's happening</h3>
                    <div className="card_info">
                      <img className="image_user" src="/img/user1.png" alt="" />
                      <div>
                        <h4>Hack academy</h4>
                        <p>@HackAcademyDev</p>
                      </div>
                      <button className="btn" type="submit">
                        Follow
                      </button>
                    </div>
                    <div className="card_info">
                      <img className="image_user" src="/img/user1.png" alt="" />
                      <div>
                        <h4>Hack academy</h4>
                        <p>@HackAcademyDev</p>
                      </div>
                      <button className="btn" type="submit">
                        Follow
                      </button>
                    </div>
                    <div className="card_info">
                      <img className="image_user" src="/img/user1.png" alt="" />
                      <div>
                        <h4>Hack academy</h4>
                        <p>@HackAcademyDev</p>
                      </div>
                      <button className="btn" type="submit">
                        Follow
                      </button>
                    </div>
                    <div className="card_info">
                      <img className="image_user" src="/img/user1.png" alt="" />
                      <div>
                        <h4>Hack academy</h4>
                        <p>@HackAcademyDev</p>
                      </div>
                      <button className="btn" type="submit">
                        Follow
                      </button>
                    </div>
                    <div className="card_info">
                      <img className="image_user" src="/img/user1.png" alt="" />
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
      )}
    </div>
  );
}

export default Home;
