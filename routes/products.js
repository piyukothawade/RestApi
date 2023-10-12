const express = require("express");
const router = express.Router();

const { getAllProducts, getAllProductsTesting} = require("../controllers/products")

router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
const { getSingleProduct } = require("../controllers/products")

// ... other routes

router.route("/:product_id").get(getSingleProduct);


module.exports = router;