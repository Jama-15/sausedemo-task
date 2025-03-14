import "../hooks/hooks";
import LoginPage from "../page-objects/pages/login.page";

describe("Authorization page", function () {
  it("Should submit login form with empty credentials by passing Username", async function () {
    const randomUsername = LoginPage.generateRandomUsername();
    const randomPassword = LoginPage.generateRandomPassword();

    await LoginPage.fillLoginForm(randomUsername, randomPassword);

    await LoginPage.clearPassword();

    // Get the current value of the password field
    const passwordValue = await LoginPage.getPasswordValue();

    // Assert that the password field is empty
    await expect(passwordValue).toBe("");

    await LoginPage.submitForm();
    await LoginPage.checkErrorMessage("Epic sadface: Password is required");
  });
});
