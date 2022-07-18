const { Op } = require("sequelize");

const User = require("./models").user;

async function getAllUsers() {
  try {
    // This is how we can use a query method to get all the users from the database
    // Selects all rows. Resolves with a (possibly empty) array
    const allUsers = await User.findAll();
    return allUsers.map((user) => user.get({ plain: true }));
  } catch (e) {
    console.log(e);
  }
}
//getAllUsers().then((users) => console.log(users));

async function getSpecificUser() {
  try {
    // Select all rows where name === 'Nicholas Stevens', but only return the first one.
    // Resolves with an object or undefined (if no matching rows exist)
    const specificUser = await User.findOne({
      where: { name: "Nicholas Stevens" },
    });
    return specificUser ? specificUser.get({ plain: true }) : "Not Found!";
  } catch (e) {
    console.log(e);
  }
}
//getSpecificUser().then((result) => console.log(result));

async function getUserByPk(key) {
  // Select a row by its primary key. Resolves with an object or undefined (if no matching rows exist)
  const userByPk = await User.findByPk(key);
  return userByPk ? userByPk.get({ plain: true }) : "Not Found!";
}
//getUserByPk(3).then((result) => console.log(result));

// A query using a numeric operator
async function getTallUsers() {
  const tallUsers = await User.findAll({
    // WHERE height >= 175
    where: {
      id: {
        [Op.gte]: 175, // gte stands for 'greater than or equal'
      },
    },
  });
  return tallUsers;
}
getTallUsers().then((result) => console.log(result));
