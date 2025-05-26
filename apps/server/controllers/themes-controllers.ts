import { RequestHandler } from 'express';
import { DUMMY_THEMES, DUMMY_USER_THEMES, updateDummyThemes } from '../../shared/const/dummyThemes';
import { HttpError } from '../models/http-error';
import { ThemeParams, ThemeResponse, UserParams, UserThemesResponse } from '../types/request-types';
import { UpdateThemeType } from '../../shared/types/themes';
import { randomUUID } from 'node:crypto';

export const getThemeById: RequestHandler<ThemeParams, ThemeResponse> = (req, res, next): void => {
  const themeId = req.params.tid;
  const theme = DUMMY_THEMES.find((t) => t.id === themeId);

  if (!theme) {
    return next(new HttpError('Could not find a theme for the provided id.', 404));
  }

  res.json({ theme });
};

export const getThemeByUserId: RequestHandler<UserParams, UserThemesResponse> = (
  req,
  res,
  next,
): void => {
  const userId = req.params.uid;
  const userThemes = DUMMY_USER_THEMES[userId];

  if (!userThemes) {
    return next(new HttpError('Could not find themes for the provided user id.', 404));
  }

  res.json({ themes: userThemes });
};

export const createTheme: RequestHandler<{}, ThemeResponse, Omit<UpdateThemeType, 'id'>> = (
  req,
  res,
  next,
): void => {
  const { title, description, imageUrl, bookingUrl, genre, rate, store_info, creator } = req.body;

  const { name, placeId, coordinates } = store_info;

  // Validate required fields
  if (
    !title ||
    !description ||
    !imageUrl ||
    !bookingUrl ||
    !genre ||
    !rate ||
    !store_info ||
    !creator
  ) {
    return next(new HttpError('Invalid inputs passed, please check your data.', 422));
  }

  // Validate coordinates
  if (!coordinates.lat || !coordinates.lng) {
    return next(new HttpError('Invalid coordinates passed.', 422));
  }

  const createdTheme: UpdateThemeType = {
    id: `thm_${randomUUID().split('-')[0]}`,
    title,
    description,
    imageUrl,
    bookingUrl,
    genre,
    rate,
    store_info: {
      name,
      placeId,
      coordinates: {
        lat: coordinates.lat,
        lng: coordinates.lng,
      },
    },
    creator: creator,
  };

  const newThemes = [...DUMMY_THEMES, createdTheme];
  updateDummyThemes(newThemes);

  // TODO: Save to database
  // For now, just return the created theme
  res.status(201).json({ theme: createdTheme });
};

export const updateTheme: RequestHandler<ThemeParams, ThemeResponse, UpdateThemeType> = async (
  req,
  res,
  next,
) => {
  const { title, description } = req.body;
  const themeId = req.params.tid;

  // Validate required fields
  if (!title || !description) {
    return next(new HttpError('Invalid inputs passed, please check your data.', 422));
  }

  const theme = DUMMY_THEMES.find((t) => t.id === themeId);
  if (!theme) {
    return next(new HttpError('Could not find theme for the provided id.', 404));
  }

  // theme은 반드시 존재하며, UpdateThemeType에 맞는 필드가 모두 존재해야 함
  const updatedTheme: UpdateThemeType = { ...theme };
  updatedTheme.title = title;
  updatedTheme.description = description;

  const themeIndex = DUMMY_THEMES.findIndex((t) => t.id === themeId);
  DUMMY_THEMES[themeIndex] = updatedTheme;

  res.status(201).json({ theme: updatedTheme });
};

export const deleteTheme: RequestHandler<ThemeParams, ThemeResponse> = (req, res, next) => {
  const themeId = req.params.tid;

  const theme = DUMMY_THEMES.find((t) => t.id === themeId);
  if (!theme) {
    return next(new HttpError('Could not find theme for the provided id.', 404));
  }

  const filteredThemes = DUMMY_THEMES.filter((t) => t.id !== themeId);
  updateDummyThemes(filteredThemes);

  res.status(201).json({ message: 'Deleted theme.', theme: theme });
};
