const npm=require('npm');

/**
 * 
 * @param {*} packageName: array of packages that needs to be installed 
 */
const installPackage=(packageName)=>{
npm.load(function(err) {
    // handle errors
  
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

module.exports=installPackage;