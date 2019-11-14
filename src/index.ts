import * as fs from "fs";
import renderTemplate, { TemplateParam } from "./renderTemplate";

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
const TEMPLATE_PATH_PROBLEM = __dirname + '/template/problem';
const TEMPLATE_PATH_TEST = TEMPLATE_PATH_PROBLEM + "_test";

const init = () => {
  console.log(`Initializing...\n`);

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

  const exportPath = `${__dirname}/${id}.${styledTitle}`;
  if (!fs.existsSync(exportPath)) {
    fs.mkdirSync(exportPath);
    console.log(`Directory ${exportPath} was created.`);
  }

  let exportFilePath = `${exportPath}/${params.PROBLEM_FUNCTION_NAME}.ts`;
  fs.writeFileSync(exportFilePath, renderTemplate(TEMPLATE_PATH_PROBLEM, params));
  console.log(`File ${exportFilePath} was created.`);

  exportFilePath = `${exportPath}/${params.PROBLEM_FUNCTION_NAME}_test.ts`;
  fs.writeFileSync(exportFilePath, renderTemplate(TEMPLATE_PATH_TEST, params));
  console.log(`File ${exportFilePath} was created.`);

  console.log(`\nInit #${id} successed!\n`);
};

const firstToUpper = (str: string) => str[0].toUpperCase() + str.slice(1);
const firstToLower = (str: string) => str[0].toLowerCase() + str.slice(1);

init();