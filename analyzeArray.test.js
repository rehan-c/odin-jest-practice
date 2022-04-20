import analyzeArray from "./analyzeArray";

it("check min value", () =>
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1));

it("check max value", () =>
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8));

it("check max length", () =>
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6));

it("check average", () =>
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4));