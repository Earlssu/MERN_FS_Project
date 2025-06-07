import express, { RequestHandler } from 'express';
import { getUsers, login, signup } from '../controllers/users-controllers';
import { GetUsersResponse, LoginBody, SignupBody, UserAuthResponse } from '../types/request-types';
import { check } from 'express-validator';

const router = express.Router();

router.get('/', getUsers as RequestHandler<{}, GetUsersResponse, any>);
router.post(
  '/signup',
  [
    check('name').not().isEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({ min: 6 }),
  ],
  signup as RequestHandler<{}, UserAuthResponse, SignupBody>,
);
router.post('/login', login as RequestHandler<{}, UserAuthResponse, LoginBody>);

export default router;
