#!/usr/bin/env node

const fs = require("fs");
const args = process.argv.slice(2, process.argv.length);

if (!args[0])
  return console.error(colorError, "please enter a name for your doc");

const template = `---
title: ${args[0]}
author: 
sidebar_label: ${args[0]}
tags:
- put
- tags
- here
---

WRITE CONTENT HERE
`;

fs.writeFile(`./${args[0]}.md`, template, err => {
  if (err)
    console.error(err);
    return;
});
