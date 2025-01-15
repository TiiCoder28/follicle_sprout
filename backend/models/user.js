const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true,                                     // Removes whitespace
        unique: [true, 'Username must be unique'],
        minLength: [3, 'Username must have at least 3 characters']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        trim: true,
        unique: [true, 'Email must be unique'],
        minLength: [5, 'Email must have 5 characters'],
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Email is not valid']
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        trim: true,
        select: false,                                  // Prevent password from being returned in queries
        minLength: [6, 'Password must have at least 6 characters']
    },
    role: {
        type: String,
        enum: ['customer', 'admin'],                   // Role can be either 'customer' or 'admin'
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
    deliveryAddresses: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DeliveryAddress',
        required: [true, 'The delivery address is required']
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true                                   // Automatically manages `createdAt` and `updatedAt`
});

module.exports = mongoose.model('User', userSchema);
