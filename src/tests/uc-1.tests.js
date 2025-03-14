import "../hooks/hooks";
import LoginPage from "../page-objects/pages/login.page";

describe("Authorization page", function () {
  it("Should fill inputs with random values and clear them after submission", async function () {
    const randomUsername = LoginPage.generateRandomUsername();
    const randomPassword = LoginPage.generateRandomPassword();

    await LoginPage.fillLoginForm(randomUsername, randomPassword);

    await LoginPage.clearLoginForm();

    // Get the current values in the username and password fields
    const usernameValue = await LoginPage.getUsernameValue();
    const passwordValue = await LoginPage.getPasswordValue();

    // Assert that the fields are empty after clearing
    await expect(usernameValue).toBe("");
    await expect(passwordValue).toBe("");

    await LoginPage.submitForm();
    await LoginPage.checkErrorMessage("Epic sadface: Username is required");
  });
});
