import {
  // getId,
  // getTitle,
  firstToLower,
  firstToUpper
} from './index';

const [...argv] = [...process.argv];
process.argv = process.argv.slice(0, 2).concat(["1.", "Two", "Sum"]);
console.warn(process.argv);
// test("getId", () => {
//   expect(getId("0").toBe("0000"));
//   expect(getId("1").toBe("0001"));
//   expect(getId("123").toBe("0123"));
//   expect(getId("0123").toBe("0123"));
//   expect(getId("1234").toBe("01234"));
// });

// test("getTitle", () => {
// }

test("firstToUpper", () => {
  expect(firstToUpper("hoge")).toBe("Hoge");
  expect(firstToUpper("HOGE")).toBe("HOGE");
});

test("firstToLower", () => {
  expect(firstToLower("HOGE")).toBe("hOGE");
  expect(firstToLower("hoge")).toBe("hoge");
});

process.argv = argv;
