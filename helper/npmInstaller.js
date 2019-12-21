var exec = require("child_process").exec;
const npmInstall = "npm install";
const express = "express -E";
const nodemon = "nodemon -D";
const bodyParser = "body-parser";
const morgan = "morgan";
const cors = "cors";
const runNpm = appName => {
  console.log("app directory::", appName);
  console.log("installing npm modules");
  exec(
    ` cd ${appName} && ${npmInstall} ${bodyParser}  ${morgan} ${cors} `,
    (error, stdout, stdin) => {
      if (error) {
        console.log("error while npm install::", error);
        console.log("run npm install directly");
        return;
      }
      console.log("installed body parser, morgan and cors");
      console.log(stdout);
      exec(`cd ${appName} && ${npmInstall} ${express}`, function(err, stdout, stdin) {
        if (err) {
          console.log("error while installing express");
          console.log("error:", err);
          return;
        }
        console.log("installed express");
        console.log(stdout);
        exec(`cd ${appName} && ${npmInstall} ${nodemon}`, function(err, stdout, stdin) {
          if (err) {
            console.log("error while installing nodemon");
            console.log("error:", err);
            return;
          }
          console.log("installed nodemon");
          console.log(stdout);
          console.log("project successfully created");
          console.log("dive into the directory and enjoy");
          console.log("Thanks for using express-skeleton");
          
        });
      });
    }
  );
};

const getCurrentDirectory = () => {
  return new Promise((resolve, reject) => {
    exec("pwd", function(error, stdout, stdin) {
      if (error) {
        reject(error);
      } else {
        console.log("index::", stdout);
        let index = stdout.lastIndexOf("/");
        resolve(stdout.substring(0, index));
      }
    });
  });
};

module.exports = {
  runNpm,
  getCurrentDirectory
};
