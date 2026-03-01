import dotenv from 'dotenv';

dotenv.config();

export const env = {
  baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com/',

  users: {
    valid: {
      username: process.env.STANDARD_USER || 'standard_user',
      password: process.env.STANDARD_PASSWORD || 'secret_sauce'
    },
    invalid: {
      username: process.env.INVALID_USER || 'invalid_user',
      password: process.env.INVALID_PASSWORD || 'invalid_password'
    }
  }
};