import express from 'express';
import themesRoutes from './routes/themes-routes';
import usersRoutes from './routes/users-routes';

const app = express();

app.use('/api/themes', themesRoutes);

app.use('/api/users', usersRoutes);

app.listen(5001, () => {
  console.log('Server is running on port 5001');
});
