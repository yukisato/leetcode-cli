// import axios from 'https://gist.githubusercontent.com/DanielRamosAcosta/2f773d815f5434f185c59aec1bab418c/raw/a442cdd8699e39ab9855cbaa571a79049a7b67d4/axios.ts';
import * as fs from "fs";
import * as path from "path";
import * as cheerio from "cheerio";
import renderFile, { TemplateParam } from "./renderFile";

enum Difficulty {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard"
}
export interface LeetCodeProblem {
  id: number;
  title: string;
  acceptance?: number;
  difficulty?: Difficulty;
}
const LEETCODE_URL = "https://leetcode.com/problemset/all/?search=";
const TEMPLATE_PATH_PROBLEM = __dirname + '/template/problem';
const TEMPLATE_PATH_TEST = TEMPLATE_PATH_PROBLEM + "_test";

const search = (problemNo: number): void => {
  // axios.get(`${LEETCODE_URL}${problemNo}`, { responseType: 'document' })
  // .then(response => {
  const dummyHtml = fs.readFileSync("./problem1.html");
  // const $ = cheerio.load(response.data);
  const $ = cheerio.load(dummyHtml);
  // let rows = $('#question-app .question-list-table tbody tr:nth-child(1)').find('td');
  // let rows = $('#question-app .question-list-table tbody').children('tr');
  let rows = $("table:nth-child(1) tr");

  // console.log(rows);
  console.log("length", rows.length);
  // const probremObj = parseProblemLine(;
  // console.log(probremObj);
  // });
};

const parseProblemLine = (): LeetCodeProblem => {
  return {
    id: 1,
    title: "hoge",
    acceptance: 65.43,
    difficulty: Difficulty.Medium
  };
  // return probremObj;
};

// 1. Two Sum
const initLeet = () => {
  console.log(`Initializing...`);

  const id = ("000" + process.argv[2].split(".")[0]).slice(-4);
  const originalTitle = process.argv.slice(3).join(" ");

  // Two Sum => TwoSum
  const styledTitle = process.argv
    .map((w: string, i: number) => {
      if (i < 3) return "";
      w = w.trim();
      return w === "" ? "" : firstToUpper(w);
    })
    .join("");

  const params: TemplateParam = {
    PROBLEM_FUNCTION_NAME: firstToLower(styledTitle),
    PROBLEM_TEST_TITLE: `${id}. ${originalTitle}`
  };

  let problemDirName = `${id}.${styledTitle}`;
  const exportPath = `${__dirname}/${problemDirName}`;

  console.log(TEMPLATE_PATH_PROBLEM, params);
  console.log(TEMPLATE_PATH_TEST, params);
  return;
  if (!fs.existsSync(exportPath)) fs.mkdirSync(exportPath);

  fs.writeFileSync(`${exportPath}/${params.PROBLEM_FUNCTION_NAME}.ts`,
    renderFile(TEMPLATE_PATH_PROBLEM, params));
  fs.writeFileSync(exportPath + firstToLower(`${styledTitle}_test.ts`),
    renderFile(TEMPLATE_PATH_TEST, params));

  console.log(`#${id} was successfully prepared!`);
};

const firstToUpper = (str: string) => str[0].toUpperCase() + str.slice(1);
const firstToLower = (str: string) => str[0].toLowerCase() + str.slice(1);

initLeet();;