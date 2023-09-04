const { faker } = require("@faker-js/faker");
const User = require("../models/User");
const Tweet = require("../models/Tweet");
const { random } = require("lodash");

faker.locale = "es";

module.exports = async () => {
  const users = Array.from({ length: 20 }).map(() => {
    return {
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      username: faker.name.fullName(),
      email: faker.internet.email(),
      password: "1234",
      bio: faker.lorem.paragraph(),
      avatar: faker.internet.avatar(),
      tweets: [],
      followers: [],
      following: [],
    };
  });

  const insertedUsers = await User.insertMany(users);

  for (const user of insertedUsers) {
    for (let i = 0; i < 10; i++) {
      let randomUser;

      while (true) {
        try {
          const randomNumber = faker.datatype.number({ min: 0, max: 19 });
          randomUser = insertedUsers[randomNumber];

          if (String(randomUser._id) !== String(user._id)) {
            break;
          }
        } catch (error) {
          console.error(error);
          break;
        }
      }

      if (
        !user.following.some((u) => String(u._id) === String(randomUser._id))
      ) {
        user.following.push(randomUser._id);
        randomUser.followers.push(user._id);
      }
      await user.save();
    }
  }

  console.log("[Database] Se corrió el seeder de Users y Tweets.");
};
