import "../hooks/hooks";
import LoginPage from "../page-objects/pages/login.page";
import users from "../data/users";

describe("Login Tests", function () {
  users.forEach(({ username, password }) => {
    it(`Should login successfully with username: ${username}`, async function () {
      // Perform login with the provided username and password
      await LoginPage.login(username, password);

      await expect(browser).toHaveTitle("Swag Labs");
    });
  });
});
