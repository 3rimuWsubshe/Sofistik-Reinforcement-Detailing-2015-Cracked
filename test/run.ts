import { parseScript } from '../src/kataw';
//import { toJs } from '../src/compiler/printer/';
import { readFiles, getTestFiles, Templates, ColorCodes } from './lib/utils';
import { autogen } from './lib/autogenerate';
import { writeFile } from 'fs';
import { resolve } from 'path';

const AUTO_UPDATE = process.argv.includes('-u');
const AUTO_GENERATE = process.argv.includes('-g');

if (process.argv.includes('-?') || process.argv.includes('--help')) {
  console.log(`
  Kataw Test Runner
  Usage:
    \`tests/kataw.spec.mjs\` [options]
  But for the time being:
    \`node --experimental-modules tests/zeparser.spec.mjs\`
  And suggested if also testing builds:
    \`node --experimental-modules cli/build.mjs; node --experimental-modules tests/zeparser.spec.mjs\` [options]
  Options:
    -g            Regenerate computed test case blocks (process all autogen.md files)
    -u            Auto-update tests with the results (tests silently updated inline, use source control to diff)
`);
  process.exit();
}

if (AUTO_UPDATE && AUTO_GENERATE) throw new Error('Cannot use auto update and auto generate together');

async function extractFiles(list: any) {

  list.forEach((obj: any) => {
    ({ options: obj.options, input: obj.input } = parseTestFile(obj.data, obj.file));
  });
}

async function runTest(list: any) {

  let bytes = 0;
  console.time(
    ColorCodes.GREEN + 'Running ' + ColorCodes.RESET + list.length + ' test cases.' + ColorCodes.yellow + ' Total time'
  );
  let set = await Promise.all(
    list.map(async (obj: any) => {
      let { input } = obj;
      bytes += input.length;
      let result = parseScript(input, obj.options);

      return { obj, result };
    })
  );
  console.timeEnd(
    ColorCodes.GREEN + 'Running ' + ColorCodes.RESET + list.length + ' test cases.' + ColorCodes.yellow + ' Total time'
  );

  await Promise.all(
    set.map(async ({ obj, result }: any) => {
      obj.newoutput.sloppy = result, obj.file;
      obj.newoutput.pretty = '✖ Soon to be open sourced';//toJs(result);
    })
  );
}

async function runTests(list: any) {
  list.forEach((obj: any) => (obj.newoutput = {}));

  await runTest(list);
}
async function constructNewOutput(list: any) {
  list.forEach((obj: any) => {
    obj.data = generateOutputBlock(obj.data, obj.newoutput.sloppy, obj.newoutput.pretty);
  });
}

async function writeNewOutput(list: any) {
  let updated = 0;
  await Promise.all(
    list.map((obj: any): any => {
      const { data, _data, file } = obj;
      if (data !== _data) {
        if (AUTO_UPDATE) {
          ++updated;
          let res: any,
            rej: any,
            p = new Promise((resolve, reject) => ((res = resolve), (rej = reject)));
          writeFile(file, data, 'utf8', (err: any) => (err ? rej(err) : res()));
          return p;
        } else {
          console.log('Output mismatch for', file);
          return Promise.resolve();
        }
      }
    })
  );
  console.log('Updated', updated, 'files');
}

async function main() {
  files = files.filter((f: any) => !f.endsWith('autogen.md'));

  const list = await readFiles(files);

  await extractFiles(list);

  await runTests(list);

  await constructNewOutput(list);
  await writeNewOutput(list);

  console.timeEnd('Whole test run');
}

const Options_HEADER = '\n## Options\n';
const INPUT_HEADER = '\n## Input\n';
const INPUT_START = '\n`````js\n';
const INPUT_END = '\n`````\n';
function parseTestFile(data: any, _file: any): any {
  // find the options
  let optionsOffset = data.indexOf(Options_HEADER);
  let start1 = data.indexOf(INPUT_START, optionsOffset);
  let end1 = data.indexOf(INPUT_END, optionsOffset);

  const options = optionsOffset === -1 ? {} : eval("0||"+ data.slice(start1 + INPUT_START.length, end1) + "");

  // find the input
  let inputOffset = data.indexOf(INPUT_HEADER);
  //ASSERT(inputOffset >= 0, 'should have an input header', file);
  let start = data.indexOf(INPUT_START, inputOffset);
  //ASSERT(start >= 0, 'Should have the start of a test case', file);
  let end = data.indexOf(INPUT_END, inputOffset);
  //ASSERT(end >= 0, 'Should have the end of a test case', file);


  // Find the test case between START and END
  let input = data.slice(start + INPUT_START.length, end);

  return { options, input };
}

function generateOutputBlock(currentOutput: any, sloppyOutput: any, printed: any) {
  sloppyOutput = JSON.stringify(sloppyOutput, null, '    ');
  let outputIndex = currentOutput.indexOf(Templates.OUTPUT_HEADER);

  if (outputIndex < 0) outputIndex = currentOutput.length;

  let diagnosticString = '';

  if (printed !== '✖ Soon to be open sourced') {
  let diagnostics = parseScript(printed).diagnostics;

  if (diagnostics.length) {
    diagnostics.forEach(function (a: any) {
      diagnosticString += '✖ ' + a.message + ' - start: ' + a.start + ', end: ' + a.length;
      diagnosticString += '\n';
    });
  } else {
    diagnosticString += '✔ No errors';
  }
}
  return (
    '' +
    currentOutput.slice(0, outputIndex) +
    Templates.OUTPUT_HEADER +
    '\n' +
    Templates.OUTPUT_HEADER_SLOPPY +
    '\n' +
    Templates.OUTPUT_CODE +
    '' +
    sloppyOutput +
    Templates.OUTPUT_CODE1 +
    Templates.OUTPUT_HEADER_PRINTED +
    '\n' +
    Templates.OUTPUT_CODE +
    printed +
    Templates.OUTPUT_CODE1 +
    Templates.OUTPUT_HEADER_DIAGNOSTICS +
    '\n' +
    Templates.OUTPUT_CODE +
    diagnosticString +
    Templates.OUTPUT_CODE1 +
    '\n' +
    ''
  );
}

console.time('Whole test run');

let files: any = [];

getTestFiles(resolve('test/__snapshot__'), '', files, true);

if (AUTO_GENERATE) {
  autogen(files);
} else {
  main();
}
