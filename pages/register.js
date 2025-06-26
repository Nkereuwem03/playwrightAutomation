export default class RegisterPage {
  constructor(page) {
    this.page = page;
    this.goToRegisterPageSelector = "a[href='register.htm']";
    this.firstName = "input[id='customer.firstName']";
    this.lastName = "input[id='customer.lastName']";
    this.address = "input[id='customer.address.street']";
    this.city = "input[id='customer.address.city']";
    this.state = "input[id='customer.address.state']";
    this.zipCode = "input[id='customer.address.zipCode']";
    this.phone = "input[id='customer.phoneNumber']";
    this.ssn = "input[id='customer.ssn']";
    this.username = "input[id='customer.username']";
    this.password = "input[id='customer.password']";
    this.confirmPassword = "#repeatedPassword";
    this.submit = "input[value='Register']";
  }

  async goTo() {
    await this.page.getByRole("link", { name: "Register" }).click();
  }

  async register(
    userData
  ) {
    await this.page.fill(this.firstName, userData.firstName);
    await this.page.fill(this.lastName, userData.lastName);
    await this.page.fill(this.address, userData.address);
    await this.page.fill(this.city, userData.city);
    await this.page.fill(this.state, userData.state);
    await this.page.fill(this.zipCode, userData.zipCode);
    await this.page.fill(this.phone, userData.phone);
    await this.page.fill(this.ssn, userData.ssn);
    await this.page.fill(this.username, userData.username);
    await this.page.fill(this.password, userData.password);
    await this.page.fill(this.confirmPassword, userData.confirmPassword);
    await this.page.locator(this.submit).click()
  }
}
