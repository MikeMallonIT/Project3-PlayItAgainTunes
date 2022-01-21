const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    orders: [Order.schema]
});

// I want to hash password before saving them, set up pre-save middleware to create password => using function definition for Mongoose "pre" middleware
userSchema.pre('save', async function(next) {

    // "this" belongs to the caller object (user instance)
    if (this.isNew || this.isModified ('password')) {
        // use saltRounds (means cost factor) to controlhow much time is needed to calculate a single hash bcrypt, salt is a random number
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);

    }
    next();
});

// Compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    // using method bcrypt.compare, second parameter is the hashed password
    return await bcrypt.compare(password, this.password);

};
// call and tell mongoose that User is the new model and userSchema is its instance to use for that model
const User = mongoose.model('User', userSchema);

module.exports = User;


