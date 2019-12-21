#!/usr/bin/env node
const commander = require("commander");
const worker = require("./worker");
var pjson = require("./package.json");
const path = require("path");


commander.version(pjson.version).description("installer");
commander
  .command("install")
  .alias("i")
  .description("install a project")
  .action(() => {
    console.log("project name::", process.argv[3]);
    var destinationPath = commander.args.shift() || ".";
    if (!process.argv[3]) {
        console.log("Project Name missing");
      console.log("use : install <projectName>");
    } else {
      worker.createproject(path.resolve(destinationPath), process.argv[3]);
    }
  });

commander.parse(process.argv);
