const express = require("express");

const { createBook, getAll, getOneById } = require("./controller");

const router = express.Router();

router.post("/", createBook);

module.exports = router;
