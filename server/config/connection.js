const mongoose = require('mongoose');

mongoose.connect(' mongodb://localhost/play-it-again-tunes',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

module.exports = mongoose.connection;


