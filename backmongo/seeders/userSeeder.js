const { faker } = require("@faker-js/faker");
const User = require("../models/User");

faker.locale = "es";

module.exports = async () => {
  const users = Array.from({ length: 20 }).map(() => {
    return new User({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      username: faker.name.fullName(),
      bio: faker.lorem.paragraph(),
      avatar: faker.internet.avatar(),
      password: "1234",
    });
  });

  for (const user of users) {
    for (let i = 0; i < 10; i++) {
      let randomUser;

      while (true) {
        try {
          const randomNumber = faker.datatype.number({ min: 0, max: 19 });
          randomUser = users[randomNumber];

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
    }
  }

  await User.insertMany(users);

  console.log("[Database] Se corrió el seeder de Users.");
};
