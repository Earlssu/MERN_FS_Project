import express, { RequestHandler } from 'express';
import {
  createTheme,
  getThemeById,
  getThemeByUserId,
  updateTheme,
} from '../controllers/themes-controllers';
import { ThemeParams, ThemeResponse, UserParams, UserThemesResponse } from '../types/request-types';
import { UpdateThemeType } from '../../shared/types/themes';

const router = express.Router();

router.get('/:tid', getThemeById as RequestHandler<ThemeParams, ThemeResponse>);
router.get('/user/:uid', getThemeByUserId as RequestHandler<UserParams, UserThemesResponse>);
router.post('/', createTheme as RequestHandler<{}, ThemeResponse, Omit<UpdateThemeType, 'id'>>);
router.patch('/:tid', updateTheme as RequestHandler<ThemeParams, ThemeResponse, UpdateThemeType>);

export default router;
