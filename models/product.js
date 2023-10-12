const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        discount: {
            type: Number,
        },
        available_units: {
            type: Number,
            required: true,
        },
        size: {
            type: String,
            required: true,
        }, 
        color: {
            type: String,
            required: true,
        },
        weight: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: [true, "price must be provided"],
        },
        inventory_id: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        featured: {
            type: Boolean,
            default: false,
           
        },
        reviews: {
            type: Number,
            required: true,
        },
        rating: {
            type: Number,
            default: 4,
        },
        company: {
            type: String,
            required: true,
        },
      
});

module.exports = mongoose.model("Product", ProductSchema);
