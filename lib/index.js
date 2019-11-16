#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var renderTemplate_1 = require("./renderTemplate");
var Difficulty;
(function (Difficulty) {
    Difficulty["Easy"] = "Easy";
    Difficulty["Medium"] = "Medium";
    Difficulty["Hard"] = "Hard";
})(Difficulty || (Difficulty = {}));
var TEMPLATE_PATH_PROBLEM = __dirname + '/template/problem';
var TEMPLATE_PATH_TEST = TEMPLATE_PATH_PROBLEM + "_test";
var run = function () {
    console.log("Initializing...\n");
    var id = ("000" + process.argv[2].split(".")[0]).slice(-4);
    var originalTitle = process.argv.slice(3).join(" ");
    // Two Sum => TwoSum
    var styledTitle = process.argv
        .map(function (w, i) {
        if (i < 3)
            return "";
        w = w.trim();
        return w === "" ? "" : exports.firstToUpper(w);
    })
        .join("");
    var params = {
        PROBLEM_FUNCTION_NAME: exports.firstToLower(styledTitle),
        PROBLEM_TEST_TITLE: id + ". " + originalTitle
    };
    var exportPath = process.cwd() + ("/" + id + "." + styledTitle);
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
exports.firstToUpper = function (str) { return str[0].toUpperCase() + str.slice(1); };
exports.firstToLower = function (str) { return str[0].toLowerCase() + str.slice(1); };
run();
