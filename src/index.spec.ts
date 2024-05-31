import { isBoolean } from "./index";
import { describe, test, expect } from "vitest";

describe("isBoolean", () => {
  test("should return false for 6", () => {
    expect(isBoolean(6)).toBe(false);
  });

  test("should return true for true", () => {
    expect(isBoolean(true)).toBe(true);
  });

  test("should return true for false", () => {
    expect(isBoolean(false)).toBe(true);
  });

  test("Should return true for Boolean(true)", () => {
    expect(isBoolean(Boolean(true))).toBe(true);
  });

  test("Should return true for Boolean(false)", () => {
    expect(isBoolean(Boolean(false))).toBe(true);
  });

  test("should return false for 1", () => {
    expect(isBoolean("1")).toBe(false);
  });

  test("should return false for !!0", () => {
    expect(isBoolean(!!0)).toBe(true);
  });

  test("should return false for 0", () => {
    expect(isBoolean(Boolean(0))).toBe(true);
  });

  test("should return false for null", () => {
    expect(isBoolean(null)).toBe(false);
  });

  test("should return false for undefined", () => {
    expect(isBoolean(undefined)).toBe(false);
  });

  test("should return false for NaN", () => {
    expect(isBoolean(NaN)).toBe(false);
  });

  test("should return false for Infinity", () => {
    expect(isBoolean(Infinity)).toBe(false);
  });

  test("should return false for -Infinity", () => {
    expect(isBoolean(-Infinity)).toBe(false);
  });

  test("should return false for 'true'", () => {
    expect(isBoolean("true")).toBe(false);
  });

  test("should return false for 'false'", () => {
    expect(isBoolean("false")).toBe(false);
  });
});
