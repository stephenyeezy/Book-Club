const axios = require('axios');
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
  console.log(questions);
  res.status(200).json(books);
}

async function show(req, res) {
  const book = await Book.findyById(req.params.id);
  res.status(200).json(puppy);
}

function create(req, res) {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.body.book}&key=${process.env.GOOGLEBOOK_KEY}`)
  .then(function(response) {
    // res.status(201).json(response.data);
    req.body.book = response.data;
    Book.create(req.body).then(book => res.json(book));
  })
  .catch(function(error) {
    console.log({error: 'No books found'});
  });
}

async function update(req, res) {
  const updatedBook = await Book.findbyIdAndUpdate(req.params.id, req.body, {new: true});
  res.status(200).json(updatedBook);
}