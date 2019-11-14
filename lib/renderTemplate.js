"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var renderTemplate = function (templatePath, params) {
    var templateStr = fs.readFileSync(templatePath, "utf8");
    for (var key in params) {
        templateStr = templateStr.replace(new RegExp(key, 'g'), params[key]);
    }
    return templateStr;
};
exports.default = renderTemplate;
