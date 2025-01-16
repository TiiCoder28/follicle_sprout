const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,                   //references user schema
        ref: 'User',
        required: [true, 'User is required']
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: [true, 'Product is required']
    },
    isVerifiedPurchase: {
        type: Boolean,
        default: false
    },
    helpfulVotes: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        required: true,
        default: 0,
        min: [0, 'Rating cannot be negative'],
        max: [5, 'Rating cannot exceed 5']
    },
    reviewText :{
        type: String,
        trim: true,
        minLength: 0,
        maxLength: [500, 'Review text cannot be more than 500 characters']

    },
}, {
    timestamps: true 
});

module.exports = mongoose.model('Review', reviewSchema);