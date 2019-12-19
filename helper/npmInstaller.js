var exec = require("child_process").exec;
const npmInstall = "npm install";
const express = "express -E";
const nodemon = "nodemon";
const bodyParser = "body-parser";
const morgan = "morgan";
const cors = "cors";
const runNpm = appName => {
  exec(
    `cd ${appName} && ${npmInstall} ${express} ${bodyParser} ${nodemon} ${morgan} ${cors}`,
    function(error, stdout, stder) {
      if (error) {
        console.error("error::", error);
      } else {
        console.log("project setup successful",stdout);
      }
    }
  );
};

const getCurrentDirectory = () => {
  return new Promise((resolve, reject) => {
    exec("pwd", function(error, stdout, stdin) {
      if (error) {
        reject(error);
      } else {
        resolve(stdout);
      }
    });
  });
};

module.exports = {
  runNpm,
  getCurrentDirectory
};
