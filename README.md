# sausedemo-task

This project contains a test suite for testing the login form on the following website: [Sauce Demo](https://www.saucedemo.com/)

## Test Cases

### UC-1: Test Login Form with Empty Credentials

1. Type any credentials into the "Username" and "Password" fields.
2. Clear the inputs.
3. Hit the "Login" button.
4. Check the error message: "Username is required".

### UC-2: Test Login Form with Credentials by Passing Username

1. Type any credentials in the username field.
2. Enter a password.
3. Clear the "Password" input.
4. Hit the "Login" button.
5. Check the error message: "Password is required".

### UC-3: Test Login Form with Credentials by Passing Username & Password

1. Type credentials in the username field that match the accepted usernames.
2. Enter the password as "secret_sauce".
3. Click on the "Login" button.
4. Validate that the page title is "Swag Labs" in the dashboard.

## Additional Information

- **Test Automation Tool**: WebDriverIO
- **Browsers**: Chrome, Edge
- **Locators**: XPath
- **Patterns**: Page Object
- **Assertions**: Use from the selected framework
- **[Optional] Loggers**: Use from the selected framework

## Task Requirements

- Provide parallel execution for tests
- Add logging for tests
- Use Data Provider to parametrize tests
