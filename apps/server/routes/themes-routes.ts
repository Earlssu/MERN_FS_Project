import express, { RequestHandler } from 'express';
import {
  createTheme,
  deleteTheme,
  getThemeById,
  getThemesByUserId,
  updateTheme,
} from '../controllers/themes-controllers';
import {
  CreateThemeRequestBody,
  ThemeParams,
  ThemeResponse,
  UserParams,
  UserThemesResponse,
} from '../shared/types/request-types';
import { RATE_RECOMMENDATION, THEME_GENRE, UpdateThemeType } from '../../shared/types/themes';
import { check } from 'express-validator';

const router = express.Router();

router.get('/:tid', getThemeById as RequestHandler<ThemeParams, ThemeResponse>);
router.get('/user/:uid', getThemesByUserId as RequestHandler<UserParams, UserThemesResponse>);

router.post(
  '/',
  [
    check('title').not().isEmpty().withMessage('Title is required'),
    check('description')
      .isLength({ min: 5 })
      .withMessage('Description must be at least 5 characters long'),
    check('address').not().isEmpty().withMessage('Address is required'),
    check('genre')
      .optional()
      .isIn(Object.values(THEME_GENRE))
      .withMessage(`Genre must be one of: ${Object.values(THEME_GENRE).join(', ')}`),
    check('rate')
      .optional()
      .isIn(Object.values(RATE_RECOMMENDATION))
      .withMessage(`Rate must be one of: ${Object.values(RATE_RECOMMENDATION).join(', ')}`),
    check('creator').not().isEmpty().withMessage('Creator is required'),
  ],
  createTheme as RequestHandler<{}, ThemeResponse, CreateThemeRequestBody>,
);

router.patch(
  '/:tid',
  [check('title').not().isEmpty(), check('description').isLength({ min: 5 })],
  updateTheme as RequestHandler<ThemeParams, ThemeResponse, UpdateThemeType>,
);

router.delete('/:tid', deleteTheme as RequestHandler<ThemeParams, ThemeResponse>);

export default router;
