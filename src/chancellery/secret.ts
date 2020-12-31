import fs from 'fs';
import dotenv from 'dotenv';

if (fs.existsSync('.env')) {
  dotenv.config({ path: '.env' });
} else {
  console.error(
    'No .env file specified.\nPlease check .env.example and create .env in root directory.'
  );
  process.exit(1);
}

export const SECRET = process.env['SECRET'];
export const API_KEY = process.env['SECRETAPI_KEY_REFRESH'];
export const OWNER_ID = process.env['OWNER_ID'];

if (!SECRET) {
  process.exit(1);
}
