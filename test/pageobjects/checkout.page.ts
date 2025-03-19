import Page from "./page";

class CheckoutPage extends Page {
  get confirmBtn() {
    return $("~Confirm & place order");
  }

  get backBtn() {
    return $("~Back");
  }

  qualityField(amount: number) {
    return $(`~Qty:${amount}`);
  }
}

export default new CheckoutPage();
