import mongoose from 'mongoose';

const brandSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    readyForPickup: Boolean
});

const Brand = mongoose.model('Brand', brandSchema);

export default Brand;