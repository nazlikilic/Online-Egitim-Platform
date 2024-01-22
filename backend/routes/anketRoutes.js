const express = require('express');
const router = express.Router();
const anketController = require('../controllers/anketController');

// Anketi değerlendir ve cevabı döndür
router.post('/degerlendir', (req, res) => {
  const { answers } = req.body;

  if (!answers || !Array.isArray(answers) || answers.length !== 20) {
    return res.status(400).json({ error: 'Geçersiz cevap formatı' });
  }

  const result = anketController.evaluateAnswers(answers);

  res.json({ result });
});

module.exports = router;
