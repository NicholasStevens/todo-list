const { Op } = require("sequelize");
const User = require("./models").user;
const Todo = require("./models").todoItem;

async function getAllUsers() {
  const allUsers = await User.findAll();
  return allUsers.map((user) => user.get({ plain: true }));
}
//getAllUsers().then((result) => console.log(result));

async function getAllTodos() {
  const allTodos = await Todo.findAll();
  return allTodos.map((todo) => todo.get({ plain: true }));
}
//getAllTodos().then((result) => console.log(result));

async function getUserByPk(key) {
  const userByPk = await User.findByPk(key);
  return userByPk ? userByPk.get({ plain: true }) : "Not Found";
}
//getUserByPk(4).then((result) => console.log(result));

async function newUser({ name, email, phone }) {
  const newUser = await User.create({ name, email, phone });
  return newUser.get({ plain: true });
}
//newUser({ name: "Hannah Stevens", email: "H@h.com", phone: 123456787 }).then(
//  result => console.log(result)
//);

async function getImportantTodos() {
  const importantTodos = await Todo.findAll({
    where: { important: true },
  });
  return importantTodos.map((todo) => todo.get({ plain: true }));
}
//getImportantTodos().then((result) => console.log(result));
