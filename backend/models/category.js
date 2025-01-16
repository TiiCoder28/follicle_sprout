const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Category name is required'],
        trim: true
    },
    description: {
        type: String,
        trim: true,
        default: ''
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Category', categorySchema);
