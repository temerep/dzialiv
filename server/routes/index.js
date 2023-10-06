const Router = require('express');
const router = new Router();
const adminRouter = require('./adminRouter');
const productRouter = require('./productRouter');
const categoryRouter = require('./categoryRouter');

router.use('/admin', adminRouter);
router.use('/product', productRouter);
router.use('/category', categoryRouter);

module.exports = router;