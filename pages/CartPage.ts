import { Page, expect } from "@playwright/test";

export class CartPage {
  constructor(private page: Page) {}

  private checkoutBtn = '#checkout';

  async checkout() {
    await this.page.locator(this.checkoutBtn).click();
    await expect(this.page).toHaveURL(/checkout-step-one/);
  }
}