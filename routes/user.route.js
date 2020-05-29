const express = require('express')
const router = express.Router();

const userControllers = require('../controllers/user.controller');
const userValidation = require('../validate/user.validate');

router.get('/contact', userControllers.contact);
router.post('/contact', userValidation.contact, userControllers.postContact);
router.get('/signup', userControllers.signup);
router.post('/signup', userControllers.signupPost);
router.get('/login', userControllers.login);
router.post('/login', userControllers.loginPost);

module.exports = router; 