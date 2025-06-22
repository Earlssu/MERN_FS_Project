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
  const themeId = req.params.tid;
  let theme;
  try {
    theme = await Theme.findById(themeId);
  } catch {
    return next(new HttpError('Something went wrong, could not find a theme', 500));
  }

  if (!theme) {
    return next(new HttpError('Could not find a theme for the provided id.', 404));
  }

  // theme => mongoose Object, so we switch to JS Object
  // getters: true feature will trim _id to id property to created object
  res.json({ theme: theme.toObject({ getters: true }) });
};

export const getThemesByUserId: RequestHandler<UserParams, UserThemesResponse> = async (
  req,
  res,
  next,
): Promise<void> => {
  const userId = req.params.uid;
  let userThemes;

  try {
    userThemes = await Theme.find({ creator: userId });
  } catch {
    return next(new HttpError('Something went wrong, could not find a theme', 500));
  }

  if (!userThemes || userThemes.length === 0) {
    return next(new HttpError('Could not find themes for the provided user id.', 404));
  }

  // Mongoose Document → Plain Object 변환
  // Note that assertion unknown as ThemeType is not the safest TS approach
  const themes = userThemes.map((theme) =>
    theme.toObject({ getters: true }),
  ) as unknown as ThemeType[];

  res.json({ themes });
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
    res.status(201).json({ theme: result });
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

  let theme;
  try {
    theme = await Theme.findById(themeId);
  } catch (err) {
    return next(new HttpError('Something went wrong, could not update theme.', 500));
  }

  if (!theme) {
    return next(new HttpError('Could not find theme for the provided id.', 404));
  }

  theme.title = title;
  theme.description = description;

  try {
    await theme.save();
  } catch (err) {
    return next(new HttpError('Something went wrong, could not update theme.', 500));
  }

  res.status(201).json({ theme });
};

export const deleteTheme: RequestHandler<ThemeParams, ThemeResponse> = async (
  req,
  res,
  next,
): Promise<void> => {
  const themeId = req.params.tid;

  let theme;
  try {
    theme = await Theme.findOneAndDelete({ _id: themeId });
  } catch (err) {
    return next(new HttpError('Something went wrong, could not delete theme.', 500));
  }

  if (!theme) {
    return next(new HttpError('Could not find theme for the provided id.', 404));
  }

  res.status(201).json({ message: 'Deleted theme.', theme: theme });
};
