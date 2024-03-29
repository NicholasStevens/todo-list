const express = require("express");

const app = express();

const PORT = 4000;

const User = require("./models").user;
const Lists = require("./models").todoList;

app.use(express.json());

app.post("/echo", (req, res) => {
  res.json(req.body);
});

app.post("/users", async (req, res, next) => {
  try {
    const email = req.body.email;
    if (!email || email === " ") {
      res.status(404).send("Must provide an email address");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/users/:userId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).send("user not found");
    } else {
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

app.put("/users/:userId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const userToUpdate = await User.findByPk(userId);
    if (!userToUpdate) {
      res.status(404).send("User not found");
    } else {
      const updatedUser = await userToUpdate.update(req.body);
      res.json(updatedUser);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/todoLists", async (req, res, next) => {
  try {
    const todoLists = await Lists.findAll();
    if (!todoLists) {
      res.status(404).send("No Todo Lists found");
    } else {
      res.json(todoLists);
    }
  } catch (e) {
    next(e);
  }
});

app.post("/todoLists", async (req, res, next) => {
  try {
    const newList = await Lists.create(req.body);
    res.json(newList);
  } catch (e) {
    next(e);
  }
});

app.put("/todoLists/:listId", async (req, res, next) => {
  try {
    const listId = parseInt(req.params.listId);
    const listToUpdate = await Lists.findByPk(listId);
    if (!listToUpdate) {
      res.status(404).send("List not found!");
    } else {
      const updatedList = await listToUpdate.update(req.body);
      res.json(updatedList);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/users/:userId/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, {
      include: [Lists],
    });
    if (user) {
      res.send(user.todoLists);
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    next(e);
  }
});

app.get("/users/:userId/lists/:listId", async (req, res, next) => {
  try {
    const listId = parseInt(req.params.listId);
    const oneList = await Lists.findByPk(listId);
    if (!oneList) {
      res.status(404).send("List not found");
    } else {
      res.json(oneList);
    }
  } catch (e) {
    next(e);
  }
});

app.post("/users/:userId/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId);
    if (!user) {
      res.status(404).send("User not vaild");
    } else {
      const newList = await Lists.create({ userId, ...req.body });
      res.json(newList);
    }
  } catch (e) {
    next(e);
  }
});

app.delete("/lists/:listId", async (req, res, next) => {
  try {
    const listId = parseInt(req.params.listId);
    const listToDelete = await Lists.findByPk(listId);
    if (!listToDelete) {
      res.status(404).send("List not found");
    } else {
      const deleteList = await listToDelete.destroy();
      res.status(204).send();
      res.json(deleteList);
    }
  } catch (e) {
    next(e);
  }
});

app.delete("/users/:userId/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, { include: [Lists] });
    if (!user) {
      res.status(404).send("User not found");
    } else {
      user.todoLists.forEach(async (list) => await list.destroy());
      res.status(204).send();
    }
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, () => {
  console.log(`listening on port:${PORT}`);
});
