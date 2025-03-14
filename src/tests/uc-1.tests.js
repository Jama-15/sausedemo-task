import "../hooks/hooks";
import LoginPage from "../page-objects/pages/login.page";

describe("Authorization page", function () {
  it("Should submit login form with empty credentials", async function () {
    const loginButton = LoginPage.loginButton;
    const errorMessage = LoginPage.errorMessage;

    await LoginPage.clearLoginForm();

    const usernameValue = await LoginPage.getUsernameValue();
    const passwordValue = await LoginPage.getPasswordValue();
    await expect(usernameValue).toBe("");
    await expect(passwordValue).toBe("");

    await loginButton.click();

    await expect(errorMessage).toHaveText("Epic sadface: Username is required");
  });
});
