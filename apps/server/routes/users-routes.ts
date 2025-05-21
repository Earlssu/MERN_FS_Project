import express, { NextFunction, Request, Response, RequestHandler } from 'express';
import { DUMMY_USER_THEMES } from '../../shared/const/dummyThemes';

const router = express.Router();

interface UserParams {
  uid: string;
}

const getUserThemes: RequestHandler<UserParams> = (req, res, next): void => {
  const userId = req.params.uid;
  const userThemes = DUMMY_USER_THEMES[userId];
  
  if (!userThemes) {
    res.status(404).json({ message: 'User not found' });
    return;
  }
  
  res.json({ themes: userThemes });
};

router.get('/:uid', getUserThemes);

export default router;
