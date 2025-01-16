const express = require('express');
const authController = require('../controllers/authController')

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/signout', authController.signout);

router.patch('/send-verification-code', authController.sendVerificationCode)
router.patch('/verify-verification-code', authController.verifyVerificationCode)

module.exports = router;