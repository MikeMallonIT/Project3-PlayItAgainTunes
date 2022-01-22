const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    price: {
        type: Number,
        required: true,
        min: 0.99
    },
    quantity: {
        type: Number,
        min: 0,
        default: 0
    },
    category: {
        type: Schema.Types.ObjectId, //To specify a type of ObjectId, use Schema.Types.ObjectId in our declaration; especially when we use a reference in our schema. In this case, the reference is Category
        ref: 'Category',
        required: true
    }
});

 // call and tell mongoose that Product is the new model and productSchema is its instance to use for that model

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

