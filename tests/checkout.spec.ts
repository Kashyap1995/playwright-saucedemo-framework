import { test, expect } from './fixtures';
import { CheckoutPage } from '../pages/CheckoutPage';
import { checkoutData } from '../utils/testData';

test('User can successfully place order', async ({ checkoutPage }) => {

  const checkout = new CheckoutPage(checkoutPage);

  await checkout.fillInformation(checkoutData.defaultUser);

  await expect(checkoutPage).toHaveURL(/checkout-step-two/);

  await checkout.finishOrder();

  await expect(checkoutPage.locator('.complete-header'))
    .toHaveText('Thank you for your order!');
});