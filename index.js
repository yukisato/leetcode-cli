"use strict";
exports.__esModule = true;
// import axios from 'https://gist.githubusercontent.com/DanielRamosAcosta/2f773d815f5434f185c59aec1bab418c/raw/a442cdd8699e39ab9855cbaa571a79049a7b67d4/axios.ts';
var fs = require("fs");
var cheerio = require("cheerio");
var renderFile_1 = require("./renderFile");
var Difficulty;
(function (Difficulty) {
    Difficulty["Easy"] = "Easy";
    Difficulty["Medium"] = "Medium";
    Difficulty["Hard"] = "Hard";
})(Difficulty || (Difficulty = {}));
var LEETCODE_URL = "https://leetcode.com/problemset/all/?search=";
var TEMPLATE_PATH_PROBLEM = __dirname + '/template/problem';
var TEMPLATE_PATH_TEST = TEMPLATE_PATH_PROBLEM + "_test";
var search = function (problemNo) {
    // axios.get(`${LEETCODE_URL}${problemNo}`, { responseType: 'document' })
    // .then(response => {
    var dummyHtml = fs.readFileSync("./problem1.html");
    // const $ = cheerio.load(response.data);
    var $ = cheerio.load(dummyHtml);
    // let rows = $('#question-app .question-list-table tbody tr:nth-child(1)').find('td');
    // let rows = $('#question-app .question-list-table tbody').children('tr');
    var rows = $("table:nth-child(1) tr");
    // console.log(rows);
    console.log("length", rows.length);
    // const probremObj = parseProblemLine(;
    // console.log(probremObj);
    // });
};
var parseProblemLine = function () {
    return {
        id: 1,
        title: "hoge",
        acceptance: 65.43,
        difficulty: Difficulty.Medium
    };
    // return probremObj;
};
// 1. Two Sum
var initLeet = function () {
    console.log("Initializing...");
    var id = ("000" + process.argv[2].split(".")[0]).slice(-4);
    var originalTitle = process.argv.slice(3).join(" ");
    // Two Sum => TwoSum
    var styledTitle = process.argv
        .map(function (w, i) {
        if (i < 3)
            return "";
        w = w.trim();
        return w === "" ? "" : firstToUpper(w);
    })
        .join("");
    var params = {
        PROBLEM_FUNCTION_NAME: firstToLower(styledTitle),
        PROBLEM_TEST_TITLE: id + ". " + originalTitle
    };
    var problemDirName = id + "." + styledTitle;
    var exportPath = __dirname + "/" + problemDirName;
    console.log(TEMPLATE_PATH_PROBLEM, params);
    console.log(TEMPLATE_PATH_TEST, params);
    return;
    if (!fs.existsSync(exportPath))
        fs.mkdirSync(exportPath);
    fs.writeFileSync(exportPath + "/" + params.PROBLEM_FUNCTION_NAME + ".ts", renderFile_1["default"](TEMPLATE_PATH_PROBLEM, params));
    fs.writeFileSync(exportPath + firstToLower(styledTitle + "_test.ts"), renderFile_1["default"](TEMPLATE_PATH_TEST, params));
    console.log("#" + id + " was successfully prepared!");
};
var firstToUpper = function (str) { return str[0].toUpperCase() + str.slice(1); };
var firstToLower = function (str) { return str[0].toLowerCase() + str.slice(1); };
initLeet();
;
