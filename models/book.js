const mongoose = require('mongoose');
const { Link } = require('react-router-dom');
const user = require('./user')
const Schema = mongoose.Schema;

const bookSchema = new Schema ({
  image: {type: String},
  title: {type: String},
  author: {type: String},
  published: {type: String},
  ISBN: {type: Number},
  description: {type: String},
  purchase: {type: String},
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);