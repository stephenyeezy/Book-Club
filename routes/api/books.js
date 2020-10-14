const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/api/books');

/* GET /api/books */
router.get('/', booksCtrl.index);
router.get('/:id', booksCtrl.show);
router.post('/', booksCtrl.create);
router.delete('/:id', booksCtrl.delete);
router.put('/:id', booksCtrl.update);

module.exports = router;