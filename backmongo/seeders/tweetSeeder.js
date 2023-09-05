const { faker } = require("@faker-js/faker");
const Tweet = require("../models/Tweet");
const User = require("../models/User");
const { random, range } = require("lodash");

faker.locale = "es";

module.exports = async () => {
  const tweets = [];

  const users = await User.find();

  const generatedTweets = Array.from({ length: 40 }).map(() => {
    const randomNumber = faker.datatype.number({
      min: 1,
      max: users.length - 1,
    });
    const randomUser = users[randomNumber];

    const tweet = new Tweet({
      author: randomUser._id,
      content: faker.lorem.paragraph(),
    });

    const numLikes = faker.datatype.number({ min: 1, max: 20 });

    const likedByUsers = Array.from({ length: numLikes }).map(
      () => users[random(0, users.length - 1)]._id
    );

    tweet.likes = likedByUsers;

    randomUser.tweets.push(tweet.id);
    return tweet;
  });

  tweets.push(...generatedTweets);

  await Tweet.insertMany(tweets);
  console.log("[Database] Se corrió el seeder de Tweets.");
};
