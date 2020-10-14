var mongoose = require('mongoose');
const { Link } = require('react-router-dom');
var Schema = mongoose.Schema;

var bookSchema = new Schema ({
  image: {type: String},
  title: {type: String},
  author: {type: String},
  published: {type: String},
  ISBN: {type: Number},
  description: {type: String},
  purchase: {type: String},
  user: {type: Schema.Types.ObjextId, ref: 'User'}
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);