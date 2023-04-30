const express = require('express');
const router = express.Router();
const policyController = require('../controllers/policyController.js');

router.post('/buy-policy', policyController.buyPolicy);

module.exports = router;
