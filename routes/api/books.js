const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/api/books');

router.use(require('../../config/auth'));

/* GET /api/books */
router.get('/list', booksCtrl.index);
router.get('/:id', booksCtrl.show);
router.post('/', booksCtrl.create);
router.post('/search', booksCtrl.search);
router.delete('/:id', booksCtrl.delete);
router.put('/:id', booksCtrl.update);


function checkAuth(req, res, next) {
  console.log(req.user);
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
