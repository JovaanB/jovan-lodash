import { isBoolean } from "./isBoolean";

describe("isBoolean", () => {
  test("should return false for isBoolean(6)", () => {
    expect(isBoolean(6)).toBe(false);
  });

  test("should return true for isBoolean(true)", () => {
    expect(isBoolean(true)).toBe(true);
  });

  test("should return true for isBoolean(false)", () => {
    expect(isBoolean(false)).toBe(true);
  });

  test("should return false for isBoolean(1)", () => {
    expect(isBoolean("1")).toBe(false);
  });

  test("should return false for isBoolean(1)", () => {
    expect(isBoolean(!!0)).toBe(true);
  });

  test("should return false for isBoolean(1)", () => {
    expect(isBoolean(Boolean(0))).toBe(true);
  });
});
