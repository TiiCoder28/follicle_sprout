const mongoose = require('mongoose')

const deliveryAddressSchema = mongoose.Schema({
    fullName: {
        type: String, required: true
    },
    street: { 
        type: String, 
        required: true 
    },
    city: { 
        type: String, 
        required: true 
    },
    province: { 
        type: String 
    },
    postalCode: { 
        type: Number, 
        required: [true, 'Postal code is required'] 
    },
    country: { 
        type: String, 
        required: true,
        default: 'South Africa' 
    },
    phoneNumber: { 
        type: String, 
        required: [true, 'Phone number is required'] 
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
    timestamps: true
});

module.exports = mongoose.model('DeliveryAddress', deliveryAddressSchema)