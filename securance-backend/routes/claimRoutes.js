const express = require('express');
const router = express.Router();
const claimController = require('../controllers/claimControllers.js');

router.post('/claim', claimController.applyForClaim);

module.exports = router;
