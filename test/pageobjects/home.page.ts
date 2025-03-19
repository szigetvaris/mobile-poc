import Page from "./page";

class HomePage extends Page {
  get categoryHeaderText() {
    return $("~category");
  }

  get cartBtn() {
    return $(
      '//android.view.View[contains(@content-desc, "items in the cart")]'
    );
  }

  addToCartBtn(index: number): ChainablePromiseElement {
    return $(
      `(//android.widget.Button[@content-desc="Add to cart"])[${index}]`
    );
  }

  get addedToCartBtn() {
    return $("~Added to cart");
  }
}

export default new HomePage();
