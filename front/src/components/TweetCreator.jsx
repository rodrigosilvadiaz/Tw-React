import { useState } from "react";
import axios from "axios";

function TweetCreator(props) {
  const { user } = props;
  const [tweetContent, setTweetContent] = useState("");

  const handleSubmit = async (event) => {

    event.preventDefault();
    const response = await axios({
      url: "http://localhost:8000/users/",
      method: "POST",
      data: { content: tweetContent },
      headers: { Authorization: `Bearer ${user.token}` },
    });
    setTweetContent("") /* para ver que algo paso */
  };

  return (
    <div className="img_campo">
      <img className="img_c" src={user.avatar} alt="" />
      <div className="form_twit">
        <form onSubmit={handleSubmit}>
          <input
            className="campo"
            name="tweetText"
            placeholder="What's happening"
            type="text"
            maxLength="140"
            value={tweetContent}
            onChange={(e) => setTweetContent(e.target.value)}
            required
          />
          <div className="btn_tweet">
            <button className="boton_tweet" onClick={handleSubmit}>
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default TweetCreator;
