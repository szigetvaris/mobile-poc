import Page from "./page";

class CartPage extends Page {
  get backBtn() {
    return $("~Back");
  }

  get pageTitle() {
    return $("~My cart");
  }

  get cartEmptyText() {
    return $("~Cart is empty");
  }

  get viewProductsBtn() {
    return $("~View products");
  }

  get applyPromoCodeBtn() {
    return $("~Apply promo code");
  }

  get continueToCheckoutBtn() {
    return $("~Continue to checkout");
  }

  get plusBtn() {
    return $("~plusButton");
  }

  async tapPlusBtn(times: number) {
    for (let i = 0; i < times; i++) {
      await this.plusBtn.tap();
    }
  }

  get minusBtn() {
    return $("~minusButton");
  }

  get removeBtn() {
    return $("~removeButton");
  }
}

export default new CartPage();
