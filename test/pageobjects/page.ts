/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  async waitForElement(
    element: ChainablePromiseElement,
    timeout: number = 5000
  ) {
    await element.waitForDisplayed({ timeout });
  }

  async typeInput(element: ChainablePromiseElement, text: string) {
    await this.waitForElement(element);
    await element.setValue(text);
  }
}
