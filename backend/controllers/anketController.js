const Anket = require('../models/Anket');

const evaluateAnswers = (answers) => {
  const yesCount = answers.filter((answer) => answer === 'evet').length;

  if (yesCount >= 3 && yesCount < 8) {
    return 'Web geliştirme alanında uzmanlaşabilirsiniz!';
  } else if (yesCount >= 8 && yesCount < 13) {
    return 'Mobil uygulama alanında uzmanlaşabilirsiniz!';
  } else if (yesCount >= 13 && yesCount < 18) {
    return 'Oyun geliştirme alanında uzmanlaşabilirsiniz!';
  } else if (yesCount >= 18) {
    return 'Kırmızı';
  } else {
    return 'Belki de sizin için doğru bir meslek seçimi değildir!';
  }
};

module.exports = {
  evaluateAnswers,
};
