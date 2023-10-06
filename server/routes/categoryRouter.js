const Router = require('express');
const router = new Router();
const categoryController = require('../controllers/CategoryController');
const verifyJWT = require('../middleware/verifyJWT');


router.get('/', categoryController.getAll);
router.post('/', verifyJWT, categoryController.create);
router.patch('/:id', verifyJWT, categoryController.update);
router.delete('/:id', verifyJWT, categoryController.remove);

module.exports = router;