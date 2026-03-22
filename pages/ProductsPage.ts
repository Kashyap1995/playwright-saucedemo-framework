import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  private products: Locator;
  private cartBadge: Locator;
  private cartIcon = '.shopping_cart_link';

  constructor(private page: Page) {
    this.products = page.locator('.inventory_item');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  addToCartButton(productName: string): Locator {
    return this.page.locator(`.inventory_item:has-text("${productName}") button`);
  }

  async verifyAllProducts(count = 6) {
    await expect(this.products).toHaveCount(count);
  }

  async addProduct(productName: string) {
    await this.addToCartButton(productName).click();
  }

  async verifyCartCount(count: number) {
    await expect(this.cartBadge).toHaveText(String(count));
  }
  async openCart() {
    await this.page.locator(this.cartIcon).click();
  }
}