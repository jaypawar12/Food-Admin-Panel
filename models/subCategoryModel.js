const mongoose = require('mongoose');

const subCategorySchema = mongoose.Schema({
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categoryDetails',
        required: true,
    },
    subCategory_name: {
        type: String,
        required: true,
    },
    subCategory_description: {
        type: String,
        required: true,
    },
    subCategory_status: {
        type: String,
        required: true,
        enum: ['Active', 'Inactive'],
    },
    subCategory_image: {
        type: String,
        required: true,
    }
});

const subCategoryDetails = mongoose.model('subCategoryDetails', subCategorySchema, "subCategoryDetails");

module.exports = subCategoryDetails;
