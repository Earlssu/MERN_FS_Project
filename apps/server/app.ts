import express, { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import themesRoutes from './routes/themes-routes';
import bodyParser from 'body-parser';
import { HttpError } from './models/http-error';
import usersRoutes from './routes/users-routes';

interface CustomError extends Error {
  code?: number;
}

const app = express();

app.use(bodyParser.json());

app.use('/api/themes', themesRoutes);
app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
  return next(new HttpError('Could not find this route.', 404));
});

const errorHandler: ErrorRequestHandler = (
  error: CustomError,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  if (res.headersSent) {
    return next(error);
  }

  res.status(error.code || 500).json({
    message: error.message || 'An unknown error occurred!',
  });
};

app.use(errorHandler);

app.listen(5001, () => {
  console.log('Server is running on port 5001');
});
