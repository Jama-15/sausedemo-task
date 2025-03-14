import "../hooks/hooks";

describe("Authorization page", function () {
  it("Should submit login form with empty credentials by passing Username", async function () {
    const usernameInput = await $("input#user-name.input_error.form_input");
    const passwordInput = await $("input#password.input_error.form_input");

    const loginButton = await $("input#login-button.submit-button.btn_action");

    const errorMessage = await $("div.error-message-container.error");

    const randomUsername = Math.random().toString(36).substring(2, 12);
    const randomPassword = Math.random().toString().slice(2, 12);

    await usernameInput.setValue(randomUsername);
    await passwordInput.setValue(randomPassword);

    await passwordInput.clearValue();

    const passwordValue = await passwordInput.getValue();

    await expect(passwordValue).toBe("");

    await loginButton.click();

    await expect(errorMessage).toHaveText(
      "Epic sadface: Username and password do not match any user in this service"
    );
  });
});
