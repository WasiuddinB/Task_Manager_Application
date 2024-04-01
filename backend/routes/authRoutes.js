const express=require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.route('registration/signin').post(authController.signIn);
router.route('registration/signup').post(authController.register);

module.exports = router;
