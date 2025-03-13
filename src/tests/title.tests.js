describe("Login Page", () => {
  it("Correct title", async () => {
    await browser.url("https://www.saucedemo.com/");
    const title = await browser.getTitle();
    await expect(title).toBe("Swag Labs");
  });
});
