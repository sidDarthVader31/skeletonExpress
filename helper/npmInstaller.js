const npm=require('npm');

/**
 * 
 * @param {*} packageName: array of packages that needs to be installed 
 */
const installPackage=(packageName)=>{
npm.load(function(err) {
  npm.
    // handle errors
    console.log("error::install:",err);
    // install module ffi
    npm.commands.install(packageName, function(er, data) {
      // log errors or data
      
    });
  
    npm.on('log', function(message) {
      // log installation progress
      console.log(message);
    });
  });
}
const runNpm=(argument)=>{
  npm.load(function(err){
  });
  npm.commands.init(["-y"],function(err,data){
    if(err){
      console.log("error:",err);
    }
    else{
      console.log("data:",data);
    }
  })
}

module.exports={
  installPackage,
  runNpm
}