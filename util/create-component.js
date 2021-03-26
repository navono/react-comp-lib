/* eslint-disable no-console */
// eslint-disable-next-line import/no-extraneous-dependencies
require('colors');
const fs = require('fs');
// eslint-disable-next-line import/no-extraneous-dependencies
const shelljs = require('shelljs');
const templates = require('./templates');

const componentPath = process.argv[2];
const componentName = process.argv[3];

if (!componentPath) {
  console.error('Please supply a valid component name'.red);
  process.exit(1);
}

const componentDirectory = `./src/${componentPath}`;
console.log(`Creating Component Templates with name: ${componentName} in ${componentDirectory}`);

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

shelljs.mkdir('-p', componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  fs.writeFileSync(
    `${componentDirectory}/${componentName}${template.extension}`,
    template.content,
  );
});

console.log(
  `Successfully created component under: ${componentDirectory.green}`,
);
