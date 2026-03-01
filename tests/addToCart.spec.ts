import { test, expect } from './fixtures';
import { ProductsPage } from '../pages/ProductsPage';
import { products } from '../utils/testData';

test('Add product to cart', async ({ loggedInPage }) => {
  const productsPage = new ProductsPage(loggedInPage);

  await productsPage.addProduct(products.backpack);

  await expect(loggedInPage.locator('.shopping_cart_badge')).toHaveText('1');
});