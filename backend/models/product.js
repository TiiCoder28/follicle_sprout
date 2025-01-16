const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Product name is required'],
        trim: true
    },
    description: {
        type: String,
        trim: true,
        default: ''
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be a positive number']
    },
    image: {
        type: String,
        required: [true, 'Product image URL is required'],
        trim: true
    },
    usageInstructions: {
        type: String,
        default: '',
        trim: true
    },
    tutorials: [
        {
            videoUrl: { type: String, trim: true }, 
            thumbnail: { type: String, trim: true }, 
            title: { type: String, trim: true }, 
            description: { type: String, trim: true } 
        }
    ],
    additionalImages: [
        {
            url: { type: String, trim: true }, 
            altText: { type: String, trim: true } 
        }
    ],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category', 
        required: true
    },
    stock: {
        type: Number,
        required: [true, 'Stock quantity is required'],
        min: [0, 'Stock cannot be negative'],
        default: 0
    },
    rating: {
        type: Number,
        default: 0,
        min: [0, 'Rating cannot be negative'],
        max: [5, 'Rating cannot exceed 5']
    },
    numReviews: {
        type: Number,
        default: 0,
        min: [0, 'Number of reviews cannot be negative']
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true,
                min: [0, 'Rating cannot be negative'],
                max: [5, 'Rating cannot exceed 5']
            },
            comment: {
                type: String,
                required: true
            },
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    isFeatured: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', productSchema);
