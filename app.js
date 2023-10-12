require("dotenv").config();

const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

// Enable CORS for all routes
app.use(cors());

app.get("/", (req, res) => {
    res.send("HI, I am live");
});

app.use("/api/products", products_routes);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am Connected`);
        });
    } catch (error) {
        console.log(error);
    }
};
start();
