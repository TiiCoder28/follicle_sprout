const express = require('express');
const authController = require('../controllers/authController');
const { identifier } = require('../middlewares/identification');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/signout', identifier, authController.signout);            //identifier function checks whether user is logged in or not

router.patch('/send-verification-code', identifier, authController.sendVerificationCode)
router.patch('/verify-verification-code', identifier, authController.verifyVerificationCode)
router.patch('/change-password', identifier, authController.changePassword)

router.patch('/send-password-reset', authController.sendForgotPasswordCode)

module.exports = router;