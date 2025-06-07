import express, { RequestHandler } from 'express';
import {
  createTheme,
  deleteTheme,
  getThemeById,
  getThemesByUserId,
  updateTheme,
} from '../controllers/themes-controllers';
import { ThemeParams, ThemeResponse, UserParams, UserThemesResponse } from '../types/request-types';
import { UpdateThemeType } from '../../shared/types/themes';
import { check } from 'express-validator';

const router = express.Router();

router.get('/:tid', getThemeById as RequestHandler<ThemeParams, ThemeResponse>);
router.get('/user/:uid', getThemesByUserId as RequestHandler<UserParams, UserThemesResponse>);
router.post(
  '/',
  [
    check('title').not().isEmpty(),
    check('description').isLength({ min: 5 }),
    check('imageUrl').not().isEmpty(),
    check('bookingUrl').not().isEmpty(),
    check('genre').not().isEmpty(),
    check('rate').not().isEmpty(),
    check('creator').not().isEmpty(),
  ],
  createTheme as RequestHandler<{}, ThemeResponse, Omit<UpdateThemeType, 'id'>>,
);
router.patch(
  '/:tid',
  [check('title').not().isEmpty(), check('description').isLength({ min: 5 })],
  updateTheme as RequestHandler<ThemeParams, ThemeResponse, UpdateThemeType>,
);
router.delete('/:tid', deleteTheme as RequestHandler<ThemeParams, ThemeResponse>);

export default router;
