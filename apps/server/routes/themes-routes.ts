import express, { RequestHandler } from 'express';
import { DUMMY_THEMES } from '../../shared/const/dummyThemes';
import { HttpError } from '../models/http-error';

const router = express.Router();

interface ThemeParams {
  tid: string;
}

const getThemeById: RequestHandler<ThemeParams> = (req, res, next): void => {
  const themeId = req.params.tid;
  const theme = DUMMY_THEMES.find((t) => t.id === themeId);

  if (!theme) {
    return next(new HttpError('Could not find a theme for the provided id.', 404));
  }

  res.json({
    theme,
  });
};

router.get('/:tid', getThemeById);

export default router;
