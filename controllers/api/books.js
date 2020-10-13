const Book = require('../../models/book');
const { deleteOne } = require('../../models/book');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

async function index(req, res) {
  const books = await Book.find({});
  res.status(200).json(books);
}

async function show(req, res) {
  const book = await Book.findyById(req.params.id);
  res.status(200).json(puppy);
}

async function create(req, res) {
  const book = await Book.create(req.body);
  res.status(201).json(book);
}

async function update(req, res) {
  const updatedBook = await Book.findbyIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedBook);
}