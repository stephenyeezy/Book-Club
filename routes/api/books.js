var express = require('express');
var router = express.Router();
var booksCtrl = require('../../controllers/api/books');

/* GET /api/books */
router.get('/', booksCtrl.index);
router.get('/:id', booksCtrl.show);
router.post('/', booksCtrl.create);
router.delete('/:id', booksCtrl.delete);
router.put('/:id', booksCtrl.update);

module.exports = router;