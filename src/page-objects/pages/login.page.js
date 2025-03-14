class LoginPage {
  get usernameInput() {
    return $("input#user-name.input_error.form_input");
  }

  get passwordInput() {
    return $("input#password.input_error.form_input");
  }

  get loginButton() {
    return $("input#login-button.submit-button.btn_action");
  }

  get errorMessage() {
    return $("div.error-message-container.error");
  }

  async fillLoginForm(username, password) {
    await this.usernameInput.setValue(username);
    await this.passwordInput.setValue(password);
  }

  async clearLoginForm() {
    await this.usernameInput.clearValue();
    await this.passwordInput.clearValue();
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
    return await this.errorMessage.getText();
  }

  async login(username, password) {
    await this.fillLoginForm(username, password);
    await this.submitForm();
  }
}

module.exports = new LoginPage();
