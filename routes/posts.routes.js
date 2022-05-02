const express = require("express");
const data = require("../data");

const router = express.Router();

// Criar um post

router.post("/create-post", (req, res) => {
  data.posts.push(req.body);

  return res.status(201).json({ msg: "Criado com sucesso!" });
});

// Ver todos os posts

router.get("/all-posts", (req, res) => {
  return res.status(200).json(data.posts);
});

module.exports = router;
