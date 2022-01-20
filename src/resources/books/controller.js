/*const Book = require("./model");
const createNewBook = require("./model");
const getAllFictionBooks = require("./model");*/

const { Book, createNewBook, getAllFictionBooks, getFictionBooksByTopic, getAllNonFictionBooks, getNonFictionBooksByTopic, getBooksByAuthor } = require("./model")

//Book().init();

async function createBook(req, res) {
  const bookToCreate = {
    ...req.body
  };

  const createBook = Book.createBook;
  const thisRes = await createNewBook(bookToCreate, res);
  return res.json({ data: thisRes });
}

async function getAllFiction(req, res) {
  const thisRes = await getAllFictionBooks(res);
  console.log("Getting All Fiction")
  return res.json({ data: thisRes });
}

async function getAllNonFiction(req, res) {
  const thisRes = await getAllNonFictionBooks(res);
  console.log("Getting All NonFiction")
  return res.json({ data: thisRes });
}

async function getFictionByTopic(req, res) {
  const topicToGet = req.params.topic

  const thisRes = await getFictionBooksByTopic(topicToGet);
  console.log("Getting Fiction By Topic")
  return res.json({ data: thisRes });
}

async function getNonFictionByTopic(req, res) {
  const topicToGet = req.params.topic

  const thisRes = await getNonFictionBooksByTopic(topicToGet);
  console.log("Getting NonFiction By Topic")
  return res.json({ data: thisRes });
}

async function getByAuthor(req, res) {
  const authorToGet = req.params.author

  const thisRes = await getBooksByAuthor(authorToGet);
  console.log("Getting By Author")
  return res.json({ data: thisRes });
}

module.exports = {
  createBook,
  getAllFiction,
  getFictionByTopic,
  getAllNonFiction,
  getNonFictionByTopic,
  getByAuthor
};