import express from 'express';
import { DUMMY_THEMES } from '../../shared/const/dummyThemes';

const router = express.Router();

router.get('/:tid', (req, res, next) => {
  const themeId = req.params.tid;
  const theme = DUMMY_THEMES.find((t) => t.id === themeId);
  console.log('GET request in Themes');
  res.json({
    theme,
  });
});

module.exports = router;
