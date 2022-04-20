import calculator from "./calculator";

it("1+2=3", () => expect(calculator.add(1, 2)).toBe(3));

it("1-2=-1", () => expect(calculator.subtract(1, 2)).toBe(-1));

it("2x4=8", () => expect(calculator.multiply(2, 4)).toBe(8));

it("4/2=2", () => expect(calculator.divide(4, 2)).toBe(2));