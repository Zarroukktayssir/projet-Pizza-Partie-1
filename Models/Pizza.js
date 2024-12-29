const mongoose = require('mongoose');

const pizzaSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category: { type: String, required: true },
    image: { type: String },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Pizza', pizzaSchema);
