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
    await this.clearUsername();
    await this.clearPassword();
  }

  async clearUsername() {
    await this.usernameInput.click(); // Focus on the username input
    await browser.keys(["Control", "a"]);
    await browser.keys("Backspace");
  }

  async clearPassword() {
    await this.passwordInput.click(); // Focus on the password input
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

  // Waits for and retrieves the error message from the page
  async getErrorMessage() {
    await this.errorMessage.waitForDisplayed();
    return await this.errorMessage.getText();
  }

  // Performs the login by filling the form and submitting it
  async login(username, password) {
    await this.fillLoginForm(username, password);
    await this.submitForm();
  }

  // Checks if the error message matches the provided message
  async checkErrorMessage(message) {
    await expect(this.errorMessage).toHaveText(message); // Assert that the error message matches the expected text
  }

  generateRandomUsername() {
    return Math.random().toString(36).substring(2, 12);
  }

  generateRandomPassword() {
    return Math.random().toString().slice(2, 12);
  }
}

module.exports = new LoginPage();
