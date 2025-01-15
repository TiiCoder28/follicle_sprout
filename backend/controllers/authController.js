const { signupSchema } = require("../middlewares/validator");
const user = require("../models/user");
const { doHash } = require("../utils/hashing");
const profile = require("../models/profile");  // Assuming this is your profile model

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
