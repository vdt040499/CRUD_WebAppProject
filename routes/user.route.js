const express = require('express')
const router = express.Router();

const userControllers = require('../controllers/user.controller');

router.get('/contact', userControllers.contact);
router.post('/contact', userControllers.postContact);

module.exports = router; 