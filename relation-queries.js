const { user, todoItem, todoList, tag } = require("./models");

async function listsWithUsers() {
  const lists = await todoList.findAll({
    include: [{ model: user, attributes: ["name"] }],
  });
  return lists.map((list) => list.toJSON());
}

//listsWithUsers().then((lists) => console.log(lists));

async function getUsers() {
  const allUsers = await user.findAll({
    include: { model: todoList, attributes: ["name"] },
  });
  return allUsers.map((user) => user.toJSON());
}

//getUsers().then((users) => console.log(users));

async function userByPk(key) {
  const userByPk = await user.findByPk(key, {
    include: [todoList],
  });
  return userByPk.get({ plain: true });
}

//userByPk(1).then((result) => console.log(result));

async function importantTodos() {
  const todos = await todoItem.findAll({
    where: { important: true },
    include: { model: todoList, attributes: ["name"] },
  });
  return todos.map((todo) => todo.toJSON());
}

//importantTodos().then((result) => console.log(result));

async function fullUserByPk(key) {
  const userByPk = await user.findByPk(key, {
    include: [
      {
        model: todoList,
        attributes: ["name"],
        include: { model: todoItem, attributes: ["task"] },
      },
    ],
  });
  return userByPk.get({ plain: true });
}
//fullUserByPk(1).then((result) => console.log(result));

async function itemsWithTags() {
  const items = await todoItem.findAll({ include: [tag] });
  return items.map((item) => item.get({ plain: true }));
}
itemsWithTags().then((items) => console.log("items with tags", items));
