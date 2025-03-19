import Page from "./page";

class OrderCompletedPage extends Page {
  get backBtn() {
    return $("~Back");
  }

  get goBackToProductsBtn() {
    return $("~Go back to products");
  }
}

export default new OrderCompletedPage();
