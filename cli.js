#!/usr/bin/env node

const worker=require('./worker');
console.log("project name:",process.argv[2]);
worker.createproject(process.argv[2]);
// if(!process.argv[3]){
//     console.log("use expressstructure install <appName>");
// }
// else if(process.argv[2]!='install'){
//     console.log("use expressstructure install <appName>")
// }
// else{
    
// }