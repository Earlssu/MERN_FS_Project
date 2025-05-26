import { RequestHandler } from 'express';
import { UserParams } from '../types/request-types';

export const getUsers: RequestHandler<UserParams> = (req, res, next) => {};

export const signup: RequestHandler<UserParams> = (req, res, next) => {};

export const login: RequestHandler<UserParams> = (req, res, next) => {};
