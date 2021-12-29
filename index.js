#!/usr/bin/env node

import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
import fs from 'fs';

import files from './lib/files.js';
import userInteraction from './lib/user-interaction.js';

const displayTitle = () => {
  console.log(
    chalk.green(
      figlet.textSync('Create Kauri Doc', { horizontalLayout: 'full' })
    )
  );
}

const docTemplate = (userInput) =>
  `---
title: ${userInput.title}
author: ${userInput.author}
sidebar_label: ${userInput.sidebarLabel}
tags:
${userInput.tags.split(',').map(tag => "- " + tag.trim()).join('\n')}
---

WRITE CONTENT HERE
`;

const run = async () => {
  // clear terminal window
  clear();

  // display title
  displayTitle();

  // prompt user for file name
  const fileNameRes = await userInteraction.askFileName();
  const fileName = fileNameRes.fileName;


  // check if file already exists
  if (files.fileExists(`./${fileName}`)) {
    let willContinue = true;

    // see if user wants to continue and replace file
    const userResponse = await userInteraction.askIfContinue(`./${fileName}`);
    userResponse.willContinue = userResponse == "Yes";

    if (!willContinue) {
      // display creation abort message
      console.log(chalk.yellow('Doc creation aborted'));
      return;
    }
  }

  // get doc info
  const docInfo = await userInteraction.askForDocInfo();

  // create doc
  fs.writeFile(`./${fileName}`, docTemplate(docInfo), err => {
    if (err)
      console.log(chalk.red(err));
    return;
  });

  // display creation confirmation
  console.log(chalk.green('Doc Created!'));
}

run();
