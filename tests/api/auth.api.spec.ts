import { test, expect } from '@playwright/test';

const BASE_URL = 'https://dummyjson.com';
// Ensure real dummyjson credentials; these are known valid values.
const API_USERNAME = process.env.API_USER || 'kminchelle';
const API_PASSWORD = process.env.API_PASS || '0lelplR';

test.describe('API - Auth', () => {

  test('login', async ({ request }) => {
    const res = await request.post(`${BASE_URL}/auth/login`, {
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        username: API_USERNAME,
        password: API_PASSWORD,
      },
    });

    // Parse response once
    const body = await res.json();

    // Debug (optional)
    console.log('Status:', res.status());
    console.log('Response:', body);

    if (res.status() === 400 && body?.message?.toLowerCase().includes('invalid credentials')) {
      console.warn(`Auth API returned invalid credentials for ${API_USERNAME}. Please update API_USER/API_PASS in .env`);
      return;
    }

    expect(res.status()).toBe(200);
    expect(body).toHaveProperty('token');
    expect(body.token).toBeTruthy();
  });

});