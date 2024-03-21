import config from './config/config';
import mongoose from 'mongoose';

const URL = config.app.DB_URL;

mongoose.connect(URL);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Mongodb connection done with URL: ' + URL);
});

connection.on('error', (err) => {
  console.log(err);
  process.exit(0);
});
