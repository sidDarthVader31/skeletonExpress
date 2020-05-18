const directoryCreator = require("./helper/directoryCreater");
const npmInstaller = require("./helper/npmInstaller");
var path = require("path");
var createFile = require("./helper/createFile");
var readFile = require("./helper/readFile");
var appendFile = require("./helper/appendFile");

const createproject = async (dir, projectName) => {
  try {
    var appFolder = await directoryCreator(dir);
    console.log("appFolder::", appFolder);
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
    var databaseFolder = await directoryCreator(
      path.join(appFolder, "/database")
    );

    //create models folder
    var models = await directoryCreator(path.join(databaseFolder, "/models"));

    //create migration folder
    var migration = await directoryCreator(
      path.join(databaseFolder, "/migration")
    );

    //create seeders folder

    var seeders = await directoryCreator(path.join(databaseFolder, "/seeders"));

    //create helpder folder
    var helper = await directoryCreator(path.join(appFolder, "/helper"));

    //create services folder
    var services = await directoryCreator(path.join(appFolder, "/services"));

    //create test folder
    var tests = await directoryCreator(path.join(appFolder, "/test"));

    //create views folder
    var views = await directoryCreator(path.join(appFolder, "/views"));

    //create directory for cron jobs
    var cron = await directoryCreator(path.join(appFolder, "/cron"));

    //create public directory
    var public = await directoryCreator(path.join(appFolder, "/public"));

    //create style sheets folder
    var css = await directoryCreator(path.join(public, "/styleSheets"));

    //create images folder
    var images = await directoryCreator(path.join(public, "/images"));

    //create js folder
    var js = await directoryCreator(path.join(public, "/js"));

    /////////////////CREATE FILES//////////////

    //read content for app.js file
    var appContent = await readFile(path.join(__dirname, "./files/app.txt"));

    //write content to newly created app.js file
    var file = await createFile(path.join(appFolder, "/app.js"), appContent);

    
    var serverContent=await readFile(path.join(__dirname,'./files/server.txt'));

    //write server file 
    var serverFile=await createFile(path.join(appFolder,"./server.js"),serverContent);

    //write dockerfile 

    var dockerContent=await readFile(path.join(__dirname,'./files/Dockerfile.txt'));
    var dockerFile =await createFile(path.join(appFolder,"./Dockerfile"),dockerContent);
    
    var toWriteFile = await readFile(
      path.join(__dirname, "./files/packagejson.txt")
    );

    //add project name
    var packagejson = await createFile(
      path.join(appFolder, "/package.json"),
      `{\n "name":"${projectName}", \n`
    );

    //update package.json
    var package = await appendFile(
      path.join(appFolder, "/package.json"),
      toWriteFile
    );

    //read from routes file
    var routeContent = await readFile(
      path.join(__dirname, "./files/routeindex.txt")
    );


    //write route file
    await createFile(path.join(routes, "/router.js"), routeContent);

    //read controller file
    var controllerContent = await readFile(
      path.join(__dirname, "./files/controller.txt")
    );

    //write controller file
    var controllerFile = await createFile(
      path.join(controllers, "/controller.js"),
      controllerContent
    );

    var content = await readFile(controllerFile);

    //read cron file
    var cronContent = await readFile(path.join(__dirname, "./files/cron.txt"));

    var cronFile = await createFile(path.join(cron, "./cron.js"), cronContent);

    //install npm package
    npmInstaller.runNpm(`${appFolder}`);
  } catch (e) {
    console.log("error::::", JSON.stringify(e));
    console.log("please try again");
  }
};
module.exports = {
  createproject
};
