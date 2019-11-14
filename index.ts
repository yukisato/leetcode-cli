// import axios from 'https://gist.githubusercontent.com/DanielRamosAcosta/2f773d815f5434f185c59aec1bab418c/raw/a442cdd8699e39ab9855cbaa571a79049a7b67d4/axios.ts';
import * as fs from 'fs';
import * as path from 'path';
import * as cheerio from 'cheerio';
import renderFile, { renderTemplate, TemplateParam } from './renderFile';

enum Difficulty {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard'
}
export interface LeetCodeProblem {
  id: number,
  title: string,
  acceptance?: number,
  difficulty?: Difficulty
}
const LEETCODE_URL = 'https://leetcode.com/problemset/all/?search=';

const search = (problemNo: number): void => {
  // axios.get(`${LEETCODE_URL}${problemNo}`, { responseType: 'document' })
  // .then(response => {
  const dummyHtml = fs.readFileSync('./problem1.html');
    // const $ = cheerio.load(response.data);
    const $ = cheerio.load(dummyHtml);
    // let rows = $('#question-app .question-list-table tbody tr:nth-child(1)').find('td');
    // let rows = $('#question-app .question-list-table tbody').children('tr');
  let rows = $('table:nth-child(1) tr');

    // console.log(rows);
    console.log('length', rows.length);
    // const probremObj = parseProblemLine(;
    // console.log(probremObj);
  // });
}

const parseProblemLine = (dom): LeetCodeProblem => {
  return {
    id: 1,
    title: 'hoge',
    acceptance: 65.43,
    difficulty: Difficulty.Medium
  };
  // return probremObj;
}

// 1. Two Sum
const initLeet = () => {
  const titleStr: string = process.argv[2];
  console.log(`Initializing with "${titleStr}"...`);

  const [id, titleWords] = titleStr.split('.');
  const styledId = `000${id}`.slice(-4);

  // Two Sum => TwoSum
  const styledTitle = titleWords.split(' ').map((w: string) => {
    w = w.trim();
    return (w === '') ? '' : firstToUpper(w);
  }).join('');


  const params: TemplateParam = {
    PROBLEM_FUNCTION_NAME: firstToLower(styledTitle),
    PROBLEM_TEST_TITLE: `${styledId}.${titleWords}`,
  }

  let problemDirName = `${styledId}.${styledTitle}`;
  const exportPath = `${__dirname}/${problemDirName}/`;

  if (!fs.existsSync(exportPath)) fs.mkdirSync(exportPath);

  fs.writeFileSync(exportPath + firstToLower(`${styledTitle}.ts`),
    renderFile(path(__dirname + '/template/problem.txt'), params);
  fs.writeFileSync(exportPath + firstToLower(`${styledTitle}_test.ts`),
    renderFile('./template/problem_test.txt', params));

  console.log(`#${styledId} was successfully prepared!`);
}

const firstToUpper = (str: string) => str[0].toUpperCase() + str.slice(1);
const firstToLower = (str: string) => str[0].toLowerCase() + str.slice(1);
