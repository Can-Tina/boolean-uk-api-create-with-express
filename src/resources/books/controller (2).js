const Book = require("./model");

//Book().init();

async function createBook(req, res) {
  const bookToCreate = {
    ...req.body
  };

  const createBook = Book.createBook;
  const thisRes = await createBook(bookToCreate, res);
  return res.json({ data: thisRes });
}

module.exports = {
  createBook,
};
