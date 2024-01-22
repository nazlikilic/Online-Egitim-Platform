const mongoose = require('mongoose');

const AnketSchema = new mongoose.Schema({
  questions: [
    {
      questionText: String,
      options: [
        {
          optionText: String,
          value: String,
        },
      ],
    },
  ],
});

const Anket = mongoose.model('Anket', AnketSchema);

module.exports = Anket;
