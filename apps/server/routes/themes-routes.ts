import express, { RequestHandler } from 'express';
import { getThemeById, getThemeByUserId } from '../controllers/themes-controllers';
import { ThemeParams, UserParams, ThemeResponse, UserThemesResponse } from '../types/request-types';

const router = express.Router();

router.get('/:tid', getThemeById as RequestHandler<ThemeParams, ThemeResponse>);
router.get('/user/:uid', getThemeByUserId as RequestHandler<UserParams, UserThemesResponse>);

export default router;
