import { NextFunction, Request, Response } from 'express';
import { DUMMY_USER_THEMES } from '../../shared/const/dummyThemes';

const router = require('express').Router();

router.get('/:uid', (req: Request, res: Response, next: NextFunction) => {
  const userId = req.params.uid;
  const userThemes = DUMMY_USER_THEMES[userId];
  if (!userThemes) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.json({ themes: userThemes });
});

export default router;
