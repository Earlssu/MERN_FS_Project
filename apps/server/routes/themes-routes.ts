import express, { RequestHandler } from 'express';
import { DUMMY_THEMES } from '../../shared/const/dummyThemes';

const router = express.Router();

interface ThemeParams {
  tid: string;
}

const getThemeById: RequestHandler<ThemeParams> = (req, res, next): void => {
  const themeId = req.params.tid;
  const theme = DUMMY_THEMES.find((t) => t.id === themeId);

  if (!theme) {
    res.status(404).json({ message: 'Theme not found' });
    return;
  }

  res.json({
    theme,
  });
};

router.get('/:tid', getThemeById);

export default router;
