const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Category, Order } = require("../models");
const { findById } = require("../models/Order");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")(
  "sk_test_51KM3QnC6YTxwccfI5nqMExqx64RawOKprvafR3l1JIDrQU0uyCJQB5cBeNdRg0FV4AGa3QSXFlEcsHrreNrAOGs500QXPG64jC"
);

const resolvers = {
  Query: {
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them

    user: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        userData.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);

        return userData;
      }

      throw new AuthenticationError("You are not logged in");
    },

    categories: async () => {
      return await Category.find().populate("products");
    },
    products: async (parent, { category, _id }) => {
      // const params = {};
      console.log(_id);
      // if (products) {
      //     params.category = category;
      // }

      // if (_id) {
      //     params.name = {
      //         $regex: name
      //     };
      // }
      return await Product.findById(_id);
    },

    products: async () => {
      return await Product.find().populate("products");
    },

    product: async (parent, { _id }) => {
      return await Product.findById(_id).populate("category");
    },

    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.products",
          populate: "category",
        });

        return user.orders.id(_id);
      }

      throw new AuthenticationError("You are not logged in");
    },

    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate("products").execPopulate();

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description,
          images: [`${url}/instrumentImages/${products[i].image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },

  Mutation: {
    // create user
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },
    // add a third argument to the resolver to access data in our context (in this case products)
    addOrder: async (parent, { products }, context) => {
      if (context.user) {
        let order = new Order({
          products,
        });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });
        // order = await Order.findById(order._id).populate('products');
        return order;
      }
      throw new AuthenticationError("You are not logged in");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }
      throw new AuthenticationError("You are not logged in");
    },
    updateProduct: async (parent, { _id, quantity }) => {
      const decrement = Math.abs(quantity) * -1;

      return await Product.findByIdAndUpdate(
        _id,
        { $inc: { quantity: decrement } },
        { new: true }
      );
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
  },
};

module.exports = resolvers;
