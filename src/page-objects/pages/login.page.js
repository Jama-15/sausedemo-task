class LoginPage {
  get usernameInput() {
    return $('[data-test="username"]');
  }

  get passwordInput() {
    return $('[data-test="password"]');
  }

  get loginButton() {
    return $('[data-test="login-button"]');
  }

  get errorMessage() {
    return $('[data-test="error"]');
  }

  async fillLoginForm(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
  }

  async clearLoginForm() {
    await this.usernameInput.click();
    await browser.keys(["Control", "a"]);
    await browser.keys("Backspace");
    await this.passwordInput.click();
    await browser.keys(["Control", "a"]);
    await browser.keys("Backspace");
  }

  async clearPassword() {
    await this.passwordInput.click();
    await browser.keys(["Control", "a"]);
    await browser.keys("Backspace");
  }

  async submitForm() {
    await this.loginButton.click();
  }

  async getUsernameValue() {
    return await this.usernameInput.getValue();
  }

  async getPasswordValue() {
    return await this.passwordInput.getValue();
  }

  async getErrorMessage() {
    await this.errorMessage.waitForDisplayed();
    return await this.errorMessage.getText();
  }

  async login(username, password) {
    await this.fillLoginForm(username, password);
    await this.submitForm();
  }
}

module.exports = new LoginPage();
