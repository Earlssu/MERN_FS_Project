import { RequestHandler } from 'express';
import { UserParams } from '../types/request-types';
import { DUMMY_USERS, updateDummyUsers } from '../../shared/const/dummyThemes';
import { UserType } from '../../shared/types/users';

export const getUsers: RequestHandler<UserParams> = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

export const signup: RequestHandler<UserParams> = (req, res, next) => {
  const { name, email, password } = req.body;
  const createdUser: UserType = {
    // TODO: switch to uuid when using the database
    id:
      DUMMY_USERS.length + 1 >= 10
        ? `user_0${DUMMY_USERS.length + 1}`
        : `user_00${DUMMY_USERS.length + 1}`,
    name,
    email,
    password,
  };

  const newUsers = [...DUMMY_USERS, createdUser];
  updateDummyUsers(newUsers);
};

export const login: RequestHandler<UserParams> = (req, res, next) => {};
