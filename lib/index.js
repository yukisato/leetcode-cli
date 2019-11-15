#!/usr/bin/env node
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
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var renderTemplate_1 = require("./renderTemplate");
var _a = __read(process.argv), args = _a.slice(2);
var Difficulty;
(function (Difficulty) {
    Difficulty["Easy"] = "Easy";
    Difficulty["Medium"] = "Medium";
    Difficulty["Hard"] = "Hard";
})(Difficulty || (Difficulty = {}));
var TEMPLATE_PATH_PROBLEM = __dirname + '/template/problem';
var TEMPLATE_PATH_TEST = TEMPLATE_PATH_PROBLEM + "_test";
var init = function () {
    console.log("Initializing...\n");
    var id = ("000" + args[0].split(".")[0]).slice(-4);
    var originalTitle = args.slice(1).join(" ");
    console.log(id, originalTitle);
    // Two Sum => TwoSum
    var styledTitle = args
        .map(function (w) {
        w = w.trim();
        return w === "" ? "" : firstToUpper(w);
    })
        .join("");
    var params = {
        PROBLEM_FUNCTION_NAME: firstToLower(styledTitle),
        PROBLEM_TEST_TITLE: id + ". " + originalTitle
    };
    var exportPath = __dirname + "/" + id + "." + styledTitle;
    if (!fs.existsSync(exportPath)) {
        fs.mkdirSync(exportPath);
        console.log("Directory " + exportPath + " was created.");
    }
    var exportFilePath = exportPath + "/" + params.PROBLEM_FUNCTION_NAME + ".ts";
    fs.writeFileSync(exportFilePath, renderTemplate_1.default(TEMPLATE_PATH_PROBLEM, params));
    console.log("File " + exportFilePath + " was created.");
    exportFilePath = exportPath + "/" + params.PROBLEM_FUNCTION_NAME + "_test.ts";
    fs.writeFileSync(exportFilePath, renderTemplate_1.default(TEMPLATE_PATH_TEST, params));
    console.log("File " + exportFilePath + " was created.");
    console.log("\nInit #" + id + " successed!\n");
};
var firstToUpper = function (str) { return str[0].toUpperCase() + str.slice(1); };
var firstToLower = function (str) { return str[0].toLowerCase() + str.slice(1); };
init();
