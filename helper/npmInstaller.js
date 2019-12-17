
var exec = require("child_process").exec;
const npmInstall = "npm install";
const express = "express -E";
const nodemon = "nodemon";
const bodyParser = "body-parser";
const morgan = "morgan";
const cors = "cors";
const runNpm = appName => {
  exec(
    `cd ${appName}/app && ${npmInstall} ${express} ${bodyParser} ${nodemon} ${morgan} ${cors}`,
    function(error, stdout, stder) {
      if (error) {
        console.error("error::", error);
      } else {
        console.log("project setup successful");
      }
    }
  );
};

module.exports = {
  runNpm
};
