import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <div className="container_h">
        <div className="sub_container_h">
          <div className="left_h">{/* ... Resto del código ... */}</div>

          <div className="center_h">
            <div className="center_container">
              <div className="profile-header">
                <div className="skyblue-section">
                  <img
                    src={user.avatar}
                    alt="Profile Avatar"
                    className="avatar"
                  />
                </div>
              </div>
              <div className="white-section">
                <div>
                  <div className="me-3">
                    <span className="fw-bold">{user.username}</span>
                    <p className="profile-username">{user.email}</p>
                  </div>
                </div>
                <div className="contador">
                  <p className="mb-0 me-3">
                    <Link
                      to="/followers"
                      className="follows_ text-decoration-none"
                    >
                      Followers: {user.followers.length}
                    </Link>
                  </p>
                  <p className="mb-0">
                    <Link
                      to="/following"
                      className="follows_ text-decoration-none"
                    >
                      Following: {user.following.length}
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {user.tweets.map((tweet) => (
              <div className="card_" key={tweet.id}>
                <div className="card_interior">
                  <div className="card_interior_left">
                    <div className="card_interior_img">
                      <img className="img_user" src={user.avatar} alt="" />
                    </div>
                  </div>
                  <div className="card_interior_right">
                    <div className="info_card">
                      <div>
                        <h4>
                          {user.firstname} {user.lastname}
                        </h4>
                      </div>
                      <div className="paragrph_">
                        <p>{user.username}</p>
                      </div>
                    </div>
                    <div className="text_card">
                      <p>{tweet.content}</p>
                    </div>
                    <div className="btns_card">
                      <div className="lik_btn">
                        <Link to={`/unlike/${tweet._id}`} className="clikes">
                          <img className="hart_" src="img/hart.png" alt="" />
                        </Link>
                        <Link to="#" className="clikes">
                          {tweet.likes.length}
                        </Link>
                      </div>
                      <form action={`/delete/${tweet._id}`} method="post">
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
                {/* ... Otras partes del código ... */}
              </div>
            </div>
            <div className="r_right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
