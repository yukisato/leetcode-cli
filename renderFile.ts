import * as fs from 'fs';

export interface TemplateParam {
  PROBLEM_FUNCTION_NAME: string;
  PROBLEM_TEST_TITLE: string;
}

const renderTemplate = (templatePath: string, params: TemplateParam) => {
  let templateStr: string = fs.readFileSync(templatePath, "utf8");
  for (let key in params) {
    templateStr = templateStr.replace(key, (params as any)[key]);
  }
  return templateStr;
}

const writeTemplate = (templatePath: string, params: TemplateParam) => {
  console.log(params);
  const problemFileName = "./template/problem";
  const testFileName = "./template/problem_test";
  let problemStr: string = fs.readFileSync(problemFileName, "utf8");
  let testStr: string = fs.readFileSync(testFileName, "utf8");
  for (let key in params) {
    problemStr = problemStr.replace(key, (params as any)[key]);
    testStr = testStr.replace(key, (params as any)[key]);
  }
  console.log(problemStr);
  console.log(testStr);
};

export default renderFile;