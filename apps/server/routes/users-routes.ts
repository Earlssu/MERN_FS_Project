import express, { RequestHandler } from 'express';
import { DUMMY_USER_THEMES } from '../../shared/const/dummyThemes';
import { HttpError } from '../models/http-error';

const router = express.Router();

interface UserParams {
  uid: string;
}

const getUserThemes: RequestHandler<UserParams> = (req, res, next): void => {
  const userId = req.params.uid;
  const userThemes = DUMMY_USER_THEMES[userId];

  if (!userThemes) {
    return next(new HttpError('Could not find a user for the provided id.', 404));
  }

  res.json({ themes: userThemes });
};

router.get('/:uid', getUserThemes);

export default router;
