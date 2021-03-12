import fs from 'fs';
import dotenv from 'dotenv';

if (fs.existsSync('../../.env')) {
  dotenv.config({ path: '../../.env' });
} else {
  console.error(
    'No .env file specified.\nPlease check .env.example and create .env in root directory.'
  );
  process.exit(1);
}

export const API_KEY = process.env['API_KEY'];
export const OWNER_ID = process.env['OWNER_ID'];
export const DNBR_AUTH = {
  username: process.env['DNBR_USERNAME'],
  password: process.env['DNBR_API_KEY'],
};
export const SAUCE_NAO_TOKEN = process.env['SAUCE_NAO_TOKEN'];
