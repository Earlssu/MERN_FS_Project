import express, { RequestHandler } from 'express';
import { getUsers, login, signup } from '../controllers/users-controllers';
import { UserParams } from '../types/request-types';

const router = express.Router();

router.get('/', getUsers as RequestHandler<UserParams>);
router.post('/signup', signup as RequestHandler<UserParams>);
router.post('/login', login as RequestHandler<UserParams>);

export default router;
