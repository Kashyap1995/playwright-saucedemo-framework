import { test, expect } from './fixtures';
import { ProductsPage } from '../pages/ProductsPage';
import { products } from '../utils/testData';


test('Verify products and add specific product', async ({ loggedInPage }) => {
  const productsPage = new ProductsPage(loggedInPage);

  await productsPage.verifyAllProducts(); // verify all products

  await productsPage.addProduct(products.backpack); // add specific product

  await productsPage.verifyCartCount(1); // verify cart
});