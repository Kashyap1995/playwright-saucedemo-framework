import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  private usernameInput = '#user-name';
  private passwordInput = '#password';
  private loginButton = '#login-button';
  private inventoryList = '.inventory_list';

  async open() {
    await this.page.goto('/');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);

    // validation INSIDE page
    await expect(this.page.locator(this.inventoryList)).toBeVisible();
  }
}