const mongoose = require ('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema ({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});

// call and tell mongoose that Order is the new model and orderSchema is its instance to use for that model

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
