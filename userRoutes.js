const express = require('express');
const { registerUser , mainPage, register} = require('../controllers/userController');

const router = express.Router();


// router.get('/register', register);
router.post('/', registerUser);
router.get('/', mainPage);

module.exports = router;
