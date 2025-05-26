import { RequestHandler } from 'express';
import { GetUsersResponse, LoginBody, SignupBody, UserAuthResponse } from '../types/request-types';
import { DUMMY_USERS, updateDummyUsers } from '../../shared/const/dummyThemes';
import { UserType } from '../../shared/types/users';
import { HttpError } from '../models/http-error';

export const getUsers: RequestHandler<{}, GetUsersResponse, any> = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

export const signup: RequestHandler<{}, UserAuthResponse, SignupBody> = (req, res, next) => {
  const { name, email, password } = req.body;

  const hasUser = DUMMY_USERS.find((u) => u.email === email);

  if (hasUser) {
    return next(new HttpError('Could not create user, email already exists', 422));
  }

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

  res.json({ message: 'User Created', user: createdUser });
};

export const login: RequestHandler<{}, UserAuthResponse, LoginBody> = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = DUMMY_USERS.find((u) => u.email === email);
  if (!identifiedUser || identifiedUser.password !== password) {
    return next(new HttpError('Could not identify user, credentials seems to be wrong', 401));
  }

  res.json({ message: 'Logged in!', user: identifiedUser });
};
