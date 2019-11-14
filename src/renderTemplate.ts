import * as fs from "fs";

export interface TemplateParam {
  PROBLEM_FUNCTION_NAME: string;
  PROBLEM_TEST_TITLE: string;
}

const renderTemplate = (templatePath: string, params: TemplateParam) => {
  let templateStr: string = fs.readFileSync(templatePath, "utf8");
  for (let key in params) {
    templateStr = templateStr.replace(new RegExp(key, 'g'), (params as any)[key]);
  }
  return templateStr;
};

export default renderTemplate;