import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('GET request in Themes');
  res.json({
    message: 'It works!',
  });
});

module.exports = router;
