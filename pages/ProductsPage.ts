import { Page, expect } from '@playwright/test';

export class ProductsPage {
  constructor(private page: Page) {}

  private cartBadge = '.shopping_cart_badge';
  private cartIcon = '.shopping_cart_link';

  addToCartButton(productName: string) {
    return this.page.locator(`.inventory_item:has-text("${productName}") button`);
  }

  async addProduct(productName: string) {
    await this.addToCartButton(productName).click();
    await expect(this.page.locator(this.cartBadge)).toHaveText('1');
  }

  async openCart() {
    await this.page.locator(this.cartIcon).click();
  }
}