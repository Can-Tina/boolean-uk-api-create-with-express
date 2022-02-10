const express = require("express");

const { createPet, getAll, getOneById } = require("./controller");

const router = express.Router();

router.post("/", createPet);

module.exports = router;
