const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'User is required']
    },
    products: [ 
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                default: 1,
                required: true,
                min: [1, 'Quantity must be at least 1']
            },
            price: {
                type: Number,
                required: true,
                min: [0, 'Price must be a positive value']
            }
        }
    ],
    totalPrice: {
        type: Number,
        required: true,
        default: 0
    },
    status: {
        type: String,
        enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled'], // Changed `statusType` to `enum`
        default: 'Pending',
        required: true
    },
     deliveryAddresses: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'DeliveryAddress',
            required: [true, 'The delivery address is required']
        },
    paymentMethod: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment',
        required: true
    },
    paymentStatus: { 
        type: String,
        enum: ['Pending', 'Completed', 'Failed', 'Refunded'],
        default: 'Pending',
        required: true
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

module.exports = mongoose.model('Order', orderSchema);
