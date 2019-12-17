const npm = require("npm");
var exec = require("child_process").exec;
const npmInstall = "npm install";
const express = "express -E";
const nodemon = "nodemon";
const bodyParser = "body-parser";
const morgan = "morgan";
const cors = "cors";
/**
 *
 * @param {*} packageName: array of packages that needs to be installed
 */
const installPackage = packageName => {
  npm.load(function(err) {
    // handle errors
    if (err) {
      console.error("error::install:", err);
    }
    // install module ffi
    npm.commands.install(packageName, function(er, data) {
      // log errors or data
    });

    npm.on("log", function(message) {
      // log installation progress
      console.log(message);
    });
  });
};
const runNpm = appName => {
  exec(`cd ${appName}/app`, function(error, stdout, stder) {
    if (error) {
      console.error("error::", error);
    } else {
      exec("ls", function(error, stdout, stder) {
        if (error) {
          console.log("error:::", error);
        } else {
          console.log("inside app folder",__dirname);
          exec(
            `${npmInstall} ${express} ${bodyParser} ${nodemon} ${morgan} ${cors}`,
            function(error, stdout, stder) {
              if (error) {
                console.error("Received an error:", error);
              } else {
                console.log("\n");
                console.log("project generated successfully");
              }
            }
          );
        }
      });
    }
  });
};

module.exports = {
  installPackage,
  runNpm
};
