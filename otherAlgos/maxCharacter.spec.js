const maxChar = require("./maxCharacter");

test("maxCharacter long string", () => {
  expect(maxChar("helllllllllooooo")).toBe("l");
});

test("maxCharacter 1 char", () => {
  expect(maxChar("h")).toBe("h");
});
