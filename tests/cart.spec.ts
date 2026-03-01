import { test, expect } from './fixtures';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { products } from '../utils/testData';

test('User can checkout from cart', async ({ loggedInPage }) => {
  const productsPage = new ProductsPage(loggedInPage);
  const cartPage = new CartPage(loggedInPage);

  await productsPage.addProduct(products.backpack);
  await productsPage.openCart();
  await cartPage.checkout();

  await expect(loggedInPage).toHaveURL(/checkout-step-one/);
});