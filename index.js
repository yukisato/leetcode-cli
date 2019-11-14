"use strict";
exports.__esModule = true;
// import axios from 'https://gist.githubusercontent.com/DanielRamosAcosta/2f773d815f5434f185c59aec1bab418c/raw/a442cdd8699e39ab9855cbaa571a79049a7b67d4/axios.ts';
var fs = require("fs");
var cheerio = require("cheerio");
var Difficulty;
(function (Difficulty) {
    Difficulty["Easy"] = "Easy";
    Difficulty["Medium"] = "Medium";
    Difficulty["Hard"] = "Hard";
})(Difficulty || (Difficulty = {}));
var LEETCODE_URL = 'https://leetcode.com/problemset/all/?search=';
var search = function (problemNo) {
    // axios.get(`${LEETCODE_URL}${problemNo}`, { responseType: 'document' })
    // .then(response => {
    var dummyHtml = fs.readFileSync('./problem1.html');
    // const $ = cheerio.load(response.data);
    var $ = cheerio.load(dummyHtml);
    // let rows = $('#question-app .question-list-table tbody tr:nth-child(1)').find('td');
    // let rows = $('#question-app .question-list-table tbody').children('tr');
    var rows = $('table:nth-child(1) tr');
    // console.log(rows);
    console.log('length', rows.length);
    // const probremObj = parseProblemLine(;
    // console.log(probremObj);
    // });
};
var parseProblemLine = function (dom) {
    dom.
        console.log(dom);
    console.log(typeof dom);
    return {
        id: 1,
        title: 'hoge',
        acceptance: 65.43,
        difficulty: Difficulty.Medium
    };
    // return probremObj;
};
// 1. Two Sum
var hoge = function (str) {
    var _a = str.split('.'), id = _a[0], titleWords = _a[1];
    var styledId = ("000" + id).slice(-4);
    // Two Sum => TwoSum
    var styledTitle = titleWords.split(' ').map(function (w) {
        w = w.trim();
        if (w === '')
            return '';
        return firstToUpper(w);
    }).join('');
    var problemDirName = styledId + "." + styledTitle;
    var basePath = __dirname + "/" + problemDirName + "/";
    fs.writeFileSync(basePath + firstToLower(styledTitle + ".ts"), '');
    fs.writeFileSync(basePath + firstToLower(styledTitle + "_test.ts"), '');
    fs.writeFileSync(firstToLower(styledTitle + ".ts"), '');
    console.log();
    // fs.mkdirSync(__dirname + '')
};
var firstToUpper = function (str) { return str[0].toUpperCase() + str.slice(1); };
var firstToLower = function (str) { return str[0].toLowerCase() + str.slice(1); };
var renderFile = function (params) {
    console.log(params);
    var problemFileName = './template/problem';
    var testFileName = './template/problem_test';
    var problemStr = fs.readFileSync(problemFileName, 'utf8');
    var testStr = fs.readFileSync(testFileName, 'utf8');
    for (var key in params) {
        problemStr = problemStr.replace(key, params[key]);
        testStr = testStr.replace(key, params[key]);
    }
    console.log(problemStr);
    console.log(testStr);
};
renderFile({
    PROBLEM_FUNCTION_NAME: 'func1',
    PROBLEM_TEST_TITLE: 'title1'
});
// hoge('1. Tstro Sum');
// search(1001);
