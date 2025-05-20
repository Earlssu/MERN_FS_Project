import express from 'express';

const themesRoutes = require('./routes/themes-routes');

const app = express();

app.use('/api/themes', themesRoutes);

app.listen(5001, () => {
  console.log('Server is running on port 5001');
});
