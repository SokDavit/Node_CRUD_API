const mongoose = require('mongoose');

const ProdctuSchema = mongoose.Schema(
    {
        "name": {
            type :String,
            required: [true, "Please provide a name"],
        },

        "quantity": {
            type :Number,
            required: true,
        },

        "price": {
            type :Number,
            required: true,
        },

        "image": {
            type :String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
)

const Product = mongoose.model('Product', ProdctuSchema);

module.exports= Product;