import app from './server';
import config from './config/config';
import './database';

const PORT = config.app.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
