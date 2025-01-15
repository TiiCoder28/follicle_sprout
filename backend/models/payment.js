const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    paymentMethod: {
        type: String,
        required: [true, 'Payment method is required'],
        enum : ['Paypal', 'Credit card', 'Debit card', 'EFT', 'Cash on delivery'],
        default: 'Credit card'
    },
    status: {
        type: String,
        enum: ['Pending', 'Shipped', 'Delivered', 'Cancelled', 'Refunded'], // Changed `statusType` to `enum`
        default: 'Pending',
        required: true
    },
    amountPaid: {
        type: Number,
        required: [true, 'Amount paid is required'],
        min: [0, 'Amount paid cannot be negative'],
        default: 0
    },
    paymentDate: {
        type: Date,
        default: Date.now 
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

module.exports = mongoose.model('Payment', paymentSchema)