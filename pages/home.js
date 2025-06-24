export default class HomePage {
  constructor(page) {
    this.page = page;
  }

  async goTo() {
    await this.page.goto("https://parabank.parasoft.com/parabank/index.htm");
  }
}
