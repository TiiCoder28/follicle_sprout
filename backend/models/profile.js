const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User schema
        required: true
    },
    fullName: {
        type: String,
        required: [true, 'Full name is required']
    },
    phoneNumber: {
        type: String,
        required: [true, 'Phone number is required'],
        match: [/^\+27\d{9}$/, 'Please enter a valid South African phone number (e.g., +27xxxxxxxxx).'] // Optional South African number validation
    },
    deliveryAddresses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DeliveryAddress' // Reference to the DeliveryAddress schema
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);
