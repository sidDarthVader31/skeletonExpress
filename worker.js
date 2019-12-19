
const directoryCreator = require("./helper/directoryCreater");
const npmInstaller = require("./helper/npmInstaller");
var path = require("path");
var createFile=require('./helper/createFile');
var readFile=require('./helper/readFile');
var appendFile=require('./helper/appendFile');


const createFolder=async(folderName)=>{
  return directoryCreator(folderName);
}

const createproject=async(projectName)=>{
    try {
        //create project folder
     var projectFolder = await directoryCreator(
       path.join(__dirname, `/${projectName}`)
     );
     var projectFolder=await createFolder( path.join(__dirname, `/${projectName}`))
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

     var toWriteFile=await readFile(path.join(__dirname,'./files/packagejson.txt'));
     console.log("package.json:",toWriteFile);
     //add project name
     var packagejson=await createFile(path.join(appFolder,'/package.json'),`{\n "name":"${projectName}", \n`);
     //update package.json
     var package=await appendFile(path.join(appFolder,'/package.json'),toWriteFile);

     //read from routes file
     var routeContent=await readFile(path.join(__dirname,'./files/routeindex.txt'));
     
     //write route file
     await createFile(path.join(routes,'/router.js'),routeContent);
     //write controller file

     var controllerContent=await readFile(path.join(__dirname,'./files/controller.txt'));
     //write controller file 
     var controllerFile=await createFile(path.join(controllers,'/controller.js'),controllerContent)
     
     //install npm package
    npmInstaller.runNpm(`${projectName}`);
   //  npmInstaller.installPackage(['express','body-parser','morgan','config']);
   } 
   catch (e) {
     console.log("error::::", e.toString());
   }
}
module.exports={
    createproject
}