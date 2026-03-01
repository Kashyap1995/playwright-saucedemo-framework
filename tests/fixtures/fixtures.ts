import { test as base, expect, Page } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';
import { CartPage } from '../../pages/CartPage';

// Base URL
const baseUrl = process.env.BASE_URL || 'https://www.saucedemo.com/';

type MyFixtures = {
  loggedInPage: Page;
  checkoutPage: Page;
};

export const test = base.extend<MyFixtures>({

  // 🔹 Login Only
  loggedInPage: async ({ page }, use) => {
    await page.goto(baseUrl);

    const login = new LoginPage(page);
    await login.login('standard_user', 'secret_sauce');

    await use(page);
  },

  // 🔹 Login + Add Product + Checkout
  checkoutPage: async ({ page }, use) => {
    await page.goto(baseUrl);

    const login = new LoginPage(page);
    await login.login('standard_user', 'secret_sauce');

    const products = new ProductsPage(page);
    await products.addProduct('Sauce Labs Backpack');
    await products.openCart();

    const cart = new CartPage(page);
    await cart.checkout();

    await use(page);
  },

});

export { expect };