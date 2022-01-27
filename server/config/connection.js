const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://project3-admin:wholesome4@cluster0.gb3jw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' || 'mongodb://localhost/play-it-again-tunes',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

module.exports = mongoose.connection;


