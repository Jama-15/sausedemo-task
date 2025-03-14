import "../hooks/hooks";
import LoginPage from "../page-objects/pages/login.page";

describe("Authorization page", function () {
  it("Should fill inputs with random values", async function () {
    const randomUsername = Math.random().toString(36).substring(2, 12);
    const randomPassword = Math.random().toString().slice(2, 12);

    await LoginPage.usernameInput.setValue(randomUsername);
    await LoginPage.passwordInput.setValue(randomPassword);

    await LoginPage.clearLoginForm();

    const usernameValue = await LoginPage.getUsernameValue();
    const passwordValue = await LoginPage.getPasswordValue();

    await expect(usernameValue).toBe("");
    await expect(passwordValue).toBe("");

    await LoginPage.submitForm();

    await expect(LoginPage.errorMessage).toHaveText(
      "Epic sadface: Username is required"
    );
  });
});
