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
  const book = await Book.find({});
  console.log(book);
  res.status(200).json(book);
}

async function show(req, res) {
  const book = await Book.findyById(req.params.id);
  res.status(200).json(book);
}

function create(req, res) {
  axios.get(`https://www.googleapis.com/books/v1/volumes?q=${req.body.book}&key=${process.env.GOOGLEBOOK_KEY}`)
  .then(function(response) {
    req.body.image = response.data.items[0].volumeInfo.imageLinks.thumbnail;
    req.body.title = response.data.items[0].volumeInfo.title;
    req.body.author = response.data.items[0].volumeInfo.authors[0];
    req.body.published = response.data.items[0].volumeInfo.publishedDate;
    req.body.description = response.data.items[0].volumeInfo.description;
    req.body.purchase = response.data.items[0].saleInfo.buyLink;
    // res.status(201).json(response.data);
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