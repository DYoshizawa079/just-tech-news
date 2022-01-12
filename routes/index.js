// collects the endpoints that were collected in the /api folder and hooking them up with the path /api
const router = require('express').Router();
const apiRoutes = require('./api');
router.use('/api', apiRoutes);
router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;