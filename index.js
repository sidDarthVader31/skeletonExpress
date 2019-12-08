const express = require("express");
const app = express();
const directoryCreator = require("./helper/directoryCreater");
const npmInstaller = require("./helper/npmInstaller");
var path = require("path");
var createFile=require('./helper/createFile');
var readFile=require('./helper/readFile');

app.get("/", async (req, res) => {
  try {
       //create project folder
    var projectFolder = await directoryCreator(
      path.join(__dirname, "/project")
    );
    //create app folder
    var appFolder = await directoryCreator(path.join(projectFolder, "/app"));

    //create routes
    var routes = await directoryCreator(path.join(appFolder, "/routes"));

    //create controllers
    var controllers = await directoryCreator(
      path.join(appFolder, "/controllers")
    );

    //create middlewares

    var middlewares = await directoryCreator(
      path.join(appFolder, "/middlewares")
    );

    //create database
    var databaseFolder=await directoryCreator(path.join(appFolder,'/database'));
    
    //create models folder
    var models=await directoryCreator(path.join(databaseFolder,'/models'));

    //create migration folder
    var migration=await directoryCreator(path.join(databaseFolder,'/migration'));

    //create seeders folder

    var seeders=await directoryCreator(path.join(databaseFolder,'/seeders'));

    //create helpder folder
    var helper=await directoryCreator(path.join(appFolder,'/helper'));

    //create services folder
    var services=await directoryCreator(path.join(appFolder,'/services'));

    //create test folder
    var tests=await directoryCreator(path.join(appFolder,'/test'));

    //create views folder
    var views=await directoryCreator(path.join(appFolder,'/views'));

    var cron=await directoryCreator(path.join(appFolder,'/cron'));

    var public =await directoryCreator(path.join(appFolder,'/public'));

    //create style sheets folder
    var css=await directoryCreator(path.join(public,'/styleSheets'));

    var images=await directoryCreator(path.join(public,'/images'));

    var js=await directoryCreator(path.join(public,'/js'));

    /////////////////CREATE FILES//////////////
    var appContent=await readFile(path.join(__dirname,'./files/app.txt'));
    var file=await createFile(path.join(appFolder,'/app.js'),appContent);
  } catch (e) {
    console.log("error::::", e.toString());
  }
});
app.listen(3000);
