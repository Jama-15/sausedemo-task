class LoginPage {
  get usernameInput() {
    return $("[data-test='username']");
  }

  get passwordInput() {
    return $("[data-test='password']");
  }

  get loginButton() {
    return $("[data-test='login-button']");
  }

  get errorMessage() {
    return $("div.error-message-container.error");
  }

  async fillLoginForm(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
  }

  async clearLoginForm() {
    await this.usernameInput.setValue("");
    await this.passwordInput.setValue("");
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

  async clearPassword() {
    await this.passwordInput.clearValue();
  }
}

module.exports = new LoginPage();
