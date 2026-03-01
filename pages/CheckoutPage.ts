import { Page } from "@playwright/test";

export type CheckoutUser = {
  firstName: string;
  lastName: string;
  postalCode: string;
};

export class CheckoutPage {
  constructor(private page: Page) {}

  private firstName = '#first-name';
  private lastName = '#last-name';
  private postalCode = '#postal-code';
  private continueBtn = '#continue';
  private finishBtn = '#finish';

  async fillInformation(user: CheckoutUser) {
    await this.page.fill(this.firstName, user.firstName);
    await this.page.fill(this.lastName, user.lastName);
    await this.page.fill(this.postalCode, user.postalCode);
    await this.page.click(this.continueBtn);
  }

  async finishOrder() {
    await this.page.click(this.finishBtn);
  }
}