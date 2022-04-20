import caesarCipher from "./caesarCipher";

it("hello world = mjqqt btwqi", () => {
    expect(caesarCipher("hello world", 5)).toBe("mjqqt btwqi");
});