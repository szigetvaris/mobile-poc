import { expect } from "@wdio/globals";

import cartPage from "../pageobjects/cart.page";
import checkoutPage from "../pageobjects/checkout.page";
import homePage from "../pageobjects/home.page";
import loginPage from "../pageobjects/login.page";
import orderCompletedPage from "../pageobjects/orderCompleted.page";

describe("TC1_Buying User Journey", () => {
  before(async () => {
    await loginPage.quickLogin();
  });

  it("Opening empty cart", async () => {
    await homePage.cartBtn.tap();

    await expect(cartPage.backBtn).toBeDisplayed();
    await expect(cartPage.pageTitle).toHaveAttr("content-desc", "My cart");
    await expect(cartPage.cartEmptyText).toBeDisplayed();
    await expect(cartPage.viewProductsBtn).toBeDisplayed();
  });

  it("Continue shopping", async () => {
    await cartPage.viewProductsBtn.tap();

    // checking element.text would be make more sense...
    await expect(homePage.categoryHeaderText).toHaveAttr(
      "content-desc",
      "category"
    );
    await expect(homePage.addedToCartBtn).not.toBeDisplayed();
    await expect(homePage.addedToCartBtn).not.toBeDisplayed();
  });

  it("Add item to cart", async () => {
    await homePage.addToCartBtn(1).tap();
    // there will be always 1 first item in the list
    //await expect(homePage.addToCartBtn(1)).not.toBeDisplayed();
    await expect(homePage.addedToCartBtn).toBeDisplayed();
    await expect(homePage.cartBtn).toHaveAttr(
      "content-desc",
      "1 items in the cart"
    );
  });

  it("Open cart with items", async () => {
    await homePage.cartBtn.click();

    await expect(cartPage.backBtn).toBeDisplayed();
    await expect(cartPage.pageTitle).toHaveAttr("content-desc", "My cart");
    await expect(cartPage.applyPromoCodeBtn).toBeDisplayed();
    await expect(cartPage.continueToCheckoutBtn).toBeDisplayed();

    await expect(cartPage.cartEmptyText).not.toBeDisplayed();
    await expect(cartPage.viewProductsBtn).not.toBeDisplayed();
  });

  it("Add 1 more items to cart", async () => {
    await cartPage.tapPlusBtn(1);

    await expect(cartPage.minusBtn).toBeDisplayed();
    await expect(cartPage.removeBtn).not.toBeDisplayed();
  });

  it("Reach limit of one item in cart", async () => {
    await cartPage.tapPlusBtn(8);
    // plus minus buttons cannot be reached when 10 items in the cart
    // await expect(cartPage.plusBtn).toBeDisabled();
    // await expect(cartPage.minusBtn).toBeDisplayed();
  });

  it("Continue to checkout", async () => {
    await cartPage.continueToCheckoutBtn.tap();

    await expect(checkoutPage.backBtn).toBeDisplayed();
    await expect(checkoutPage.confirmBtn).toBeDisplayed();

    const qtyField = checkoutPage.qualityField(10);
    await expect(qtyField).toHaveAttr("content-desc", "Qty:10");
  });

  it("Confirm order", async () => {
    await checkoutPage.confirmBtn.tap();

    await expect(orderCompletedPage.backBtn).toBeDisplayed();
    await expect(orderCompletedPage.goBackToProductsBtn).toBeDisplayed();
  });

  it("Return to products", async () => {
    await orderCompletedPage.goBackToProductsBtn.tap();

    await expect(homePage.categoryHeaderText).toHaveAttr(
      "content-desc",
      "category"
    );
    await expect(homePage.cartBtn).toHaveAttr(
      "content-desc",
      "0 items in the cart"
    );
  });
});
