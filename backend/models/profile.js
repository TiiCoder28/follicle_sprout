const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User schema
        required: true
    },
    fullName: {
        type: String,
        required: false 
    },
    phoneNumber: {
        type: String,
        required: false,
        match: [/^\+27\d{9}$/, 'Please enter a valid South African phone number (e.g., +27xxxxxxxxx).'] // Optional South African number validation
    },
    deliveryAddresses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DeliveryAddress'
    }],
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);
