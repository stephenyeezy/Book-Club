var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema ({
  title: {type: String},
  author: {type: String},
  ISBN: {type: Number},
  description: {type: String}
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);