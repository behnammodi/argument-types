import ArgumentTypes from "./index";

describe("Test", () => {
  test("sum with 2 argument types", () => {
    function sum({ a, b }) {
      return a + b;
    }

    sum.argumentTypes = {
      a: ArgumentTypes.number,
      b: ArgumentTypes.number
    };

    expect(() => {
      sum.callSafe(null, { a: 2, b: "3" });
    }).toThrow();

    expect(sum.callSafe(null, { a: 2, b: 3 })).toBe(5);
  });
});
