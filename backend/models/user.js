const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,                                     // Removes whitespace
        unique: [true, 'Username must be unique'],
        minLength: [3, 'Username must have at least 3 characters'],
        maxLength: 50
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: [true, 'Email must be unique'],
        index: true,
        minLength: [5, 'Email must have 5 characters'],
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Email is not valid']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true,
        select: false,                                  // Prevent password from being returned in queries
        minLength: [6, 'Password must have at least 6 characters'],
        maxLength: 100
    },
    role: {
        type: String,
        enum: ['customer', 'admin'],
        default: 'customer'
    },
    verified: {
        type: Boolean,
        default: false                                 // Indicates whether the user has verified their email
    },
    verificationCode: {
        type: String,
        select: false                                  // Store a code for email verification (not returned in queries)
    },
    verificationCodeExpiration: {
        type: Date,                                    // Expiry time for the verification code
        select: false
    },
    forgotPasswordCode: {
        type: String,
        select: false                                  // Code sent for password recovery
    },
    forgotPasswordCodeExpiration: {
        type: Date,                                    // Expiry time for the forgot password code
        select: false
    },
    facebookId: {
        type: String,
        default: null                                  // For Facebook login integration
    },
    instagramId: {
        type: String,
        default: null                                  // For Instagram login integration
    },
    googleId: {
        type: String,
        default: null                                  // For Google login integration
    },
    // profile: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Profile' // Reference to the Profile schema
    // },
}, {
    timestamps: true                                   // Automatically manages `createdAt` and `updatedAt`
});

module.exports = mongoose.model('User', userSchema);
