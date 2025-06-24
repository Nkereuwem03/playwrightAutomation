export default class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameBox = "input[name='username']";
    this.passwordBox = "input[name='password']";
    this.submit = "input[value='Log In']";
  }

  async login(username, passsword) {
    await this.page.fill(this.usernameBox, username);
    await this.page.fill(this.passwordBox, passsword);
    await this.page.locator(this.submit).click();
  }
}
