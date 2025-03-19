import Page from "./page";

class LoginPage extends Page {
  get loginQuickBtn() {
    return driver.$("~Sign in with correct user");
  }

  public async quickLogin() {
    const element = await this.loginQuickBtn;
    await element.waitForDisplayed({ timeout: 5000 });
    await element.tap();
  }
}

export default new LoginPage();
