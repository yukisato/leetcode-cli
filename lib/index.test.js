"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var _a = __read(__spread(process.argv)), argv = _a.slice(0);
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
test("firstToUpper", function () {
    expect(index_1.firstToUpper("hoge")).toBe("Hoge");
    expect(index_1.firstToUpper("HOGE")).toBe("HOGE");
});
test("firstToLower", function () {
    expect(index_1.firstToLower("HOGE")).toBe("hOGE");
    expect(index_1.firstToLower("hoge")).toBe("hoge");
});
process.argv = argv;
