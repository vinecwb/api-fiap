const express = require("express");
const router = express.Router();

let users = [
  { id: 1, name: "Usuário 1" },
  { id: 2, name: "Usuário 2" },
  { id: 3, name: "Usuário 3" },
];

router.get("/", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("Usuário não encontrado");
  res.json(user);
});

router.post("/", (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(user);
  res.status(201).json(user);
});

router.put("/id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("Usuário não encontrado");

  user.name = req.body.name;
  res.json(user);
});

router.delete("/id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).send("Usuário não encontrado");

  users.splice(userIndex, 1);
  res.json(users);
});

module.exports = router;
