import { sum } from "../sum";

test("Add 2 positive numbers", () => {
  expect(sum(2, 3)).toBe(5);
});
