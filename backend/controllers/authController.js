const { signupSchema, loginSchema, acceptCodeSchema } = require("../middlewares/validator");
const user = require("../models/user");
const { doHash, doHashValidation, hmacProcess } = require("../utils/hashing");
const jwt = require('jsonwebtoken');
const transport = require("../middlewares/sendMail");
const crypto = require('crypto');

exports.signup = async (req, res) => {
    const { email, password, username } = req.body;
    try {
        // Validate user input
        const { error, value } = signupSchema.validate({ email, password, username });

        if (error) {
            return res.status(401).json({ success: false, message: error.details[0].message });
        }

        // Check if the user already exists by email
        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(401).json({ success: false, message: 'User already exists' });
        }

        // Hash the password before saving
        const hashedPassword = await doHash(password, 12);

        // Check if the username already exists
        const existingUsername = await user.findOne({ username });
        if (existingUsername) {
            return res.status(401).json({ success: false, message: 'Username already exists' });
        }

        // Create a new user object
        const newUser = new user({
            email,
            password: hashedPassword,  // Save the hashed password
            username
        });

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Remove the password from the response before sending it to the client
        savedUser.password = undefined;

        res.status(201).json({ success: true, message: 'Account successfully created', user: savedUser });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error during signup', error: error.message });
    }
};


exports.login = async (req, res) => {
    const { username, password } = req.body

    try {
        const { error, vale } = loginSchema.validate({ username, password })
        if (error) {
            return res
                .status(401)
                .json({ success: false, message: error.details[0].message });
        }
        const existingUser = await user.findOne({ username }).select('+password')

        if (!existingUser) {
            return res.status(401).json({ success: false, message: "User doesnt exist" })
        };
        const result = await doHashValidation(password, existingUser.password);

        if (!result) {
            return res.status(401).json({ success: false, message: "Invalid password" })
        }
        const token = jwt.sign({
            userId: existingUser._id,
            email: existingUser.email,
            verified: existingUser.verified
        },
            process.env.TOKEN_SECRET, {
            expiresIn: '8h'
        }
        );
        //sets a cookie in the client's browser.
        res.cookie('Authorization', 'Bearer ' + token, { expires: new Date(Date.now() + 8 * 3600000), httpOnly: process.env.NODE_ENV === 'production', secure: process.env.NODE_ENV === 'production' })
            .json({
                success: true,
                token,
                message: 'logged in successfully'

            });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: 'Error logging in', error: error.message });
    }
};

exports.signout = async (req, res) => {
    res.clearCookie('Authorization').status(200).json({ success: true, message: 'logged out successfully' });
};

exports.sendVerificationCode = async (req, res) => {
    const { email } = req.body;

    try {

        const existingUser = await user.findOne({ email });

        if (!existingUser) {
            return res.status(401).json({ success: false, message: "User doesn't exist" });
        }
        if (existingUser.verified) {
            return res.status(400).json({ success: false, message: 'You are already verified' });
        }

        const codeValue = Math.floor(Math.random() * 1000000).toString();  // generating a code
        console.log('Generated Code:', codeValue);  // Log generated code

        let info = await transport.sendMail({
            from: process.env.NODE_CODE_SENDING_EMAIL_ADDRESS,
            to: existingUser.email,
            subject: 'Verification code',
            html: `<h1>${codeValue}</h1>`
        });

        if (info.accepted && info.accepted.includes(existingUser.email)) {
            existingUser.verificationCode = codeValue;
            existingUser.verificationCodeValidation = Date.now();
            await existingUser.save();

            return res.status(200).json({ success: true, message: 'Code has been sent successfully' });
        }
        return res.status(400).json({ success: false, message: 'Failed to send the verification code' });

    } catch (error) {
        console.error('Error sending verification code:', error);
        return res.status(500).json({ success: false, message: 'An error occurred while sending the code' });
    }
}

exports.verifyVerificationCode = async (req, res) => {
    const { email, providedCode } = req.body;

    try {
        // Validate input
        const { error } = acceptCodeSchema.validate({ email, providedCode });
        if (error) {
            return res.status(401).json({ success: false, message: error.details[0].message });
        }

        // Fetch the user and include the necessary fields
        const existingUser = await user.findOne({ email }).select("+verificationCode +verificationCodeValidation");
        console.log('Existing User:', existingUser); // Log user data for debugging

        if (!existingUser) {
            return res.status(401).json({ success: false, message: "User does not exist" });
        }
        if (existingUser.verified) {
            return res.status(400).json({ success: false, message: 'You are already verified' });
        }
        if (!existingUser.verificationCode) {
            return res.status(400).json({ 
                success: false, 
                message: 'Verification code missing. Please request a new code.' 
            });
        }
        // Check if the verification code has expired
        const expirationTime = 5 * 60 * 1000; // 5 minutes in milliseconds
        const timeDifference = Date.now() - existingUser.verificationCodeValidation;
     

        if (timeDifference > expirationTime) {
            return res.status(400).json({ success: false, message: 'The verification code has expired' });
        }

        if (providedCode.toString() === existingUser.verificationCode.toString()) {
            // Mark the user as verified and clear the verification code and timestamp
            existingUser.verified = true;
            existingUser.verificationCode = undefined; // Clear the code
            existingUser.verificationCodeValidation = undefined; // Clear the timestamp
            await existingUser.save();

            return res.status(200).json({ success: true, message: 'Your account has been verified' });
        }

        // If codes do not match, return an error
        return res.status(400).json({ success: false, message: 'Verification code is incorrect' });

    } catch (error) {
        console.error('Error verifying code:', error);
        return res.status(500).json({ success: false, message: 'An error occurred while verifying the code' });
    }
};
