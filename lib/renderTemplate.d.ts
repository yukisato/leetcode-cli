export interface TemplateParam {
    PROBLEM_FUNCTION_NAME: string;
    PROBLEM_TEST_TITLE: string;
}
declare const renderTemplate: (templatePath: string, params: TemplateParam) => string;
export default renderTemplate;
