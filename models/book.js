var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema ({
  name: {type: String, required: true},
  ISBN: {type: Number},
  description: {type: String}
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);