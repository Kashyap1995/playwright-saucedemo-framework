import { test, expect } from './fixtures';
import { LoginPage } from '../pages/LoginPage';
import { env } from '../utils/config/env';

test('User can login @smoke', async ({ page }) => {
  const login = new LoginPage(page);

  await login.open();
  await login.login(env.users.valid.username, env.users.valid.password);
});