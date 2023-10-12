const Product = require("../models/product");

const getAllProducts = async(req, res) => {
    // Default page to 1 and limit to 10
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    try {
        // Retrieve products with pagination
        const products = await Product.find(req.query)
                                     .skip(skip)
                                     .limit(limit);

        const modifiedProducts = products.map(product => {
            const obj = product.toObject(); 
            obj.product_id = obj._id;
            delete obj._id;
            return obj;
        });

        // Directly send the modified array of products
        res.status(200).json(modifiedProducts);

    } catch (error) {
        res.status(500).json({msg: "Server Error", error: error.message});
    }
};

const getAllProductsTesting = async(req,res) => {
    res.status(200).json({msg: "I am getAllProductsTesting"});
};

const getSingleProduct = async(req, res) => {
    try {
        const product = await Product.findById(req.params.product_id);

        if (!product) {
            return res.status(404).json({msg: "Product not found"});
        }

        const obj = product.toObject();
        obj.product_id = obj._id;
        delete obj._id;

        res.status(200).json(obj);
    } catch (error) {
        res.status(500).json({msg: "Server Error", error: error.message});
    }
};

module.exports = { getAllProducts, getAllProductsTesting, getSingleProduct };
