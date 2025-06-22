import { RequestHandler } from 'express';
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
  ThemeType,
  UpdateThemeType,
} from '../../shared/types/themes';
import { validationResult } from 'express-validator';
import { getCoordsForAddress } from '../shared/utils/location';
import Theme from '../models/theme';

export const getThemeById: RequestHandler<ThemeParams, ThemeResponse> = async (
  req,
  res,
  next,
): Promise<void> => {
  try {
    const theme = await Theme.findById(req.params.tid);

    if (!theme) {
      return next(new HttpError('Could not find a theme for the provided id.', 404));
    }

    res.json({ theme: theme.toObject({ getters: true }) });
  } catch {
    return next(new HttpError('Something went wrong, could not find a theme', 500));
  }
};

export const getThemesByUserId: RequestHandler<UserParams, UserThemesResponse> = async (
  req,
  res,
  next,
): Promise<void> => {
  try {
    const userThemes = await Theme.find({ creator: req.params.uid });

    if (!userThemes || userThemes.length === 0) {
      return next(new HttpError('Could not find themes for the provided user id.', 404));
    }

    const themes = userThemes.map((theme) =>
      theme.toObject({ getters: true }),
    ) as unknown as ThemeType[];
    res.json({ themes });
  } catch {
    return next(new HttpError('Something went wrong, could not find themes', 500));
  }
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
    const storeInfo = await getCoordsForAddress(address);
    if (!storeInfo.coordinates) {
      return next(new HttpError('Could not find coordinates for the provided address.', 422));
    }
    const createdTheme = new Theme({
      title,
      description,
      imageUrl: imageUrl || '',
      bookingUrl: bookingUrl || '',
      genre: genre || THEME_GENRE.Fantasy,
      rate: rate || RATE_RECOMMENDATION.StronglyRecommend,
      store_info: storeInfo as StoreType,
      creator,
    });
    const result = await createdTheme.save();
    res.status(201).json({ theme: result.toObject({ getters: true }) });
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
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new HttpError('Invalid inputs passed. please check your data.', 422));
  }

  try {
    const theme = await Theme.findById(req.params.tid);

    if (!theme) {
      return next(new HttpError('Could not find theme for the provided id.', 404));
    }

    theme.title = req.body.title;
    theme.description = req.body.description;

    const result = await theme.save();
    res.status(200).json({ message: 'Updated theme.', theme: result.toObject({ getters: true }) });
  } catch (err) {
    return next(new HttpError('Something went wrong, could not update theme.', 500));
  }
};

export const deleteTheme: RequestHandler<ThemeParams, ThemeResponse> = async (
  req,
  res,
  next,
): Promise<void> => {
  try {
    const theme = await Theme.findOneAndDelete({ _id: req.params.tid });

    if (!theme) {
      return next(new HttpError('Could not find theme for the provided id.', 404));
    }

    res.status(200).json({ message: 'Deleted theme.', theme: theme.toObject({ getters: true }) });
  } catch (err) {
    return next(new HttpError('Something went wrong, could not delete theme.', 500));
  }
};
