import dotenv from 'dotenv';

dotenv.config();

const MONGO_OPTIONS = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  socketTimeoutMS: 30000,
  keepAlive: true,
  poolSize: 50,
  autoIndex: false,
  retryWrites: false
};

const MONGO_USERNAME = process.env.MONGO_USERNAME || 'AnGeL';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '27017';
const MONGO_DB = process.env.MONGO_DB || `FurnitureShop`;
const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const MONGO = {
  host: MONGO_HOST,
  password: MONGO_PASSWORD,
  username: MONGO_USERNAME,
  options: MONGO_OPTIONS,
  url: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@angel.f9tbg.mongodb.net/${MONGO_DB}`
};

const SERVER__HOSTNAME = process.env.SERVER__HOSTNAME || 'http://localhost';
const SERVER__PORT = process.env.SERVER__PORT || 8000;
const SERVER__TOKEN_EXPIRETIME = process.env.SERVER__TOKEN_EXPIRETIME || 3600;
const SERVER__TOKEN__ISSUER = process.env.SERVER__TOKEN__ISSUER || 'coolIssuer';
const SERVER__TOKEN__SECRET = process.env.SERVER__TOKEN__SECRET || 'secretPassword';
const SERVER__TOKEN__ACTIVATION = process.env.JWT_ACTIVATION || 'activateToken';
const STRIPE__SK = process.env.STRIPE_SK || 'stripeSecres';
const STRIPE__PK = process.env.STRIPE_PK || 'stripePublic';

const SERVER = {
  hostname: SERVER__HOSTNAME,
  port: SERVER__PORT,
  token: {
    expireTime: SERVER__TOKEN_EXPIRETIME,
    issuer: SERVER__TOKEN__ISSUER,
    secret: SERVER__TOKEN__SECRET,
    activation: SERVER__TOKEN__ACTIVATION
  },
  Stripe: {
    secret: STRIPE__SK,
    public: STRIPE__PK
  }
};

const MAIL_KEY = process.env.MAIL_KEY || '';
const EMAIL_FROM = process.env.EMAIL_FROM || 'example@gmail.com';
const SQMAIL = {
  MAIL_KEY: MAIL_KEY,
  EMAIL_FROM: EMAIL_FROM
};

const AWS__CONFIG = {
  apiVersion: '2016-04-18',
  region: 'eu-west-2',
  secretId: process.env.COGNITO_CLIENT_SECRET || '',
  client_id: process.env.COGNITO_CLIENT_ID || '',
  domain: process.env.COGNITO_DOMAIN_NAME_URL || '',
  grant_type: process.env.COGNITO_LOGIN_GRANT_TYPE || '',
  redirect_uri: process.env.COGNITO_LOGIN_REDIRECT_URL || '',
  type: process.env.COGNITO_LOGIN_RESPONSE_TYPE || '',
  logout: process.env.COGNITO_LOGOUT_REDIRECT_URL || '',
  userPoolId: 'eu-west-2_nTb9f0PDg'
};

export const config = {
  mongo: MONGO,
  server: SERVER,
  sqMail: SQMAIL,
  awsConfig: AWS__CONFIG
};
