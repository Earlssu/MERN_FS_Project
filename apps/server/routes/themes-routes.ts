import express, { RequestHandler } from 'express';
import { DUMMY_THEMES, DUMMY_USER_THEMES } from '../../shared/const/dummyThemes';
import { HttpError } from '../models/http-error';

const router = express.Router();

interface ThemeParams {
  tid: string;
}

interface UserParams {
  uid: string;
}

// Get theme by ID
router.get('/:tid', (req, res, next) => {
  const themeId = req.params.tid;
  const theme = DUMMY_THEMES.find((t) => t.id === themeId);

  if (!theme) {
    return next(new HttpError('Could not find a theme for the provided id.', 404));
  }

  res.json({ theme });
});

// Get themes by user ID
router.get('/user/:uid', (req, res, next) => {
  const userId = req.params.uid;
  const userThemes = DUMMY_USER_THEMES[userId];

  if (!userThemes) {
    return next(new HttpError('Could not find themes for the provided user id.', 404));
  }

  res.json({ themes: userThemes });
});

export default router;
