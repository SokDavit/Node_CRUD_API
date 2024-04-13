require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const Product = require("./models/product.model");
const app = express();
const productRoutes = require('./routes/product.routes.js');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// routes
app.use('/api/v1/products', productRoutes);


mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log('connected to database');
    app.listen(process.env.PORT, () => {
        console.log('listening on port '+ process.env.PORT);
    });
})
.catch((err) => {
    console.error(err);
});
