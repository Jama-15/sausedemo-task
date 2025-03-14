import "../hooks/hooks";
import LoginPage from "../page-objects/pages/login.page";

describe("Authorization page", function () {
  it("Should submit login form with empty credentials by passing Username", async function () {
    const randomUsername = Math.random().toString(36).substring(2, 12);
    const randomPassword = Math.random().toString().slice(2, 12);

    await LoginPage.usernameInput.setValue(randomUsername);
    await LoginPage.passwordInput.setValue(randomPassword);

    await LoginPage.clearPassword();

    const passwordValue = await LoginPage.getPasswordValue();

    await expect(passwordValue).toBe("");

    await browser.pause(3000);

    await LoginPage.submitForm();

    await expect(LoginPage.errorMessage).toHaveText(
      "Epic sadface: Password is required"
    );
  });
});
