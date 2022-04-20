import { test } from "@jest/globals";
import capitalize from "./capitalize";

it("rehan to be capitalized", () => {
    expect(capitalize("rehan")).toBe("Rehan");
});