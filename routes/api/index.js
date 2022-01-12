//collects the endpoints in user-routes.js and prefixes/hooks them to the /api/users route

const router = require('express').Router();
const userRoutes = require('./user-routes.js');
router.use('/users', userRoutes);
module.exports = router;