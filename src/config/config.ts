import dotenv from 'dotenv';

dotenv.config();

type TConfig = {
  [key: string]: EnvironmentConfig;
};

type EnvironmentConfig = {
  app: AppConfig;
};

type AppConfig = {
  PORT: string | number;
  DB_URL: string;
};

const ENV = process.env.NODE_ENV ?? 'development';

const CONFIG: TConfig = {
  development: {
    app: {
      PORT: process.env.PORT || 4001,
      DB_URL: process.env.MONGODB_URL || 'mongodb://localhost/development',
    },
  },
  production: {
    app: {
      PORT: process.env.PORT || 8081,
      DB_URL: process.env.MONGODB_URL || 'mongodb://localhost/production',
    },
  },
};

export default CONFIG[ENV];
