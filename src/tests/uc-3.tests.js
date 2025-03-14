import "../hooks/hooks";
import LoginPage from "../page-objects/pages/login.page";

describe("Login Tests", function () {
  const usernames = [
    "standard_user",
    "locked_out_user",
    "problem_user",
    "performance_glitch_user",
    "error_user",
    "visual_user",
  ];

  usernames.forEach((username) => {
    it(`Should login successfully with username: ${username}`, async function () {
      await LoginPage.login(username, "secret_sauce");
      await expect(browser).toHaveTitle("Swag Labs");
    });
  });
});
