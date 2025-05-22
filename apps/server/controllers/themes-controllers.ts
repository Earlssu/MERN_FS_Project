import { Request, Response, NextFunction, RequestHandler } from 'express';
import { DUMMY_THEMES, DUMMY_USER_THEMES } from '../../shared/const/dummyThemes';
import { HttpError } from '../models/http-error';
import { ThemeParams, UserParams, ThemeResponse, UserThemesResponse } from '../types/request-types';

export const getThemeById: RequestHandler<ThemeParams, ThemeResponse> = (req, res, next): void => {
  const themeId = req.params.tid;
  const theme = DUMMY_THEMES.find((t) => t.id === themeId);

  if (!theme) {
    return next(new HttpError('Could not find a theme for the provided id.', 404));
  }

  res.json({ theme });
};

export const getThemeByUserId: RequestHandler<UserParams, UserThemesResponse> = (req, res, next): void => {
  const userId = req.params.uid;
  const userThemes = DUMMY_USER_THEMES[userId];

  if (!userThemes) {
    return next(new HttpError('Could not find themes for the provided user id.', 404));
  }

  res.json({ themes: userThemes });
};
