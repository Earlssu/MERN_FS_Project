import { RequestHandler } from 'express';
import { DUMMY_THEMES, updateDummyThemes } from '../../shared/const/dummyThemes';
import { HttpError } from '../models/http-error';
import {
  CreateThemeRequestBody,
  ThemeParams,
  ThemeResponse,
  UserParams,
  UserThemesResponse,
} from '../shared/types/request-types';
import {
  RATE_RECOMMENDATION,
  StoreType,
  THEME_GENRE,
  UpdateThemeType,
} from '../../shared/types/themes';
import { randomUUID } from 'node:crypto';
import { validationResult } from 'express-validator';
import { getCoordsForAddress } from '../shared/utils/location';

export const getThemeById: RequestHandler<ThemeParams, ThemeResponse> = (req, res, next): void => {
  const themeId = req.params.tid;
  const theme = DUMMY_THEMES.find((t) => t.id === themeId);

  if (!theme) {
    return next(new HttpError('Could not find a theme for the provided id.', 404));
  }

  res.json({ theme });
};

export const getThemesByUserId: RequestHandler<UserParams, UserThemesResponse> = (
  req,
  res,
  next,
): void => {
  const userId = req.params.uid;
  const userThemes = DUMMY_THEMES.filter((t) => {
    return t.creator === userId;
  });

  if (!userThemes || userThemes.length === 0) {
    return next(new HttpError('Could not find themes for the provided user id.', 404));
  }

  res.json({ themes: userThemes });
};

export const createTheme: RequestHandler<{}, ThemeResponse, CreateThemeRequestBody> = async (
  req,
  res,
  next,
): Promise<void> => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError('Invalid inputs passed. please check your data.', 422));
  }

  const { title, description, address, imageUrl, bookingUrl, genre, rate, creator } = req.body;

  try {
    // 주소로부터 장소 정보 조회
    const storeInfo = await getCoordsForAddress(address);

    if (!storeInfo.coordinates) {
      return next(new HttpError('Could not find coordinates for the provided address.', 422));
    }

    const createdTheme: UpdateThemeType = {
      id: `thm_${randomUUID().split('-')[0]}`,
      title,
      description,
      imageUrl: imageUrl || '',
      bookingUrl: bookingUrl || '',
      genre: genre || THEME_GENRE.Fantasy,
      rate: rate || RATE_RECOMMENDATION.StronglyRecommend,
      store_info: storeInfo as StoreType,
      creator,
    };

    const newThemes = [...DUMMY_THEMES, createdTheme];
    updateDummyThemes(newThemes);

    res.status(201).json({ theme: createdTheme });
  } catch (error) {
    if (error instanceof HttpError) {
      return next(error);
    }
    return next(new HttpError('Error creating theme.', 500));
  }
};

export const updateTheme: RequestHandler<ThemeParams, ThemeResponse, UpdateThemeType> = async (
  req,
  res,
  next,
) => {
  const { title, description } = req.body;
  const themeId = req.params.tid;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new HttpError('Invalid inputs passed. please check your data.', 422));
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
