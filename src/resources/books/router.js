const express = require("express");

const { createBook, getAllFiction, getFictionByTopic, getAllNonFiction, getNonFictionByTopic, getByAuthor } = require("./controller");

const router = express.Router();

router.post("/", createBook);

router.get("/fiction/topic=:topic", getFictionByTopic)

router.get("/fiction", getAllFiction)

router.get("/non-fiction", getAllNonFiction)

router.get("/non-fiction/topic=:topic", getNonFictionByTopic)

router.get("/author/:author/order=recent", getByAuthor)

module.exports = router;
