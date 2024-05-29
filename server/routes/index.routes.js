const router = require("express").Router();
const users = require('./api/users.api.routes');
const baskets = require('./api/baskets.api.routes');
const drugs = require('./api/drugs.api.routes');
// const auth = require('./api/auth.api.routes');
const tokens = require('./api/tokens.api.routes');

router.use('/users', users);
router.use('/baskets', baskets);
router.use('/drugs', drugs);
// router.use('/auth', auth);
router.use('/token', tokens);

module.exports = router;