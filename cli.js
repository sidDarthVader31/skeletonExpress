#!/usr/bin/env node

const worker=require('./worker');
const {exec}=require('child_process');


if(!process.argv[2]){
    console.log("use gary install <project name>");
}
else if(!process.argv[3]){
    console.log("you are missing app name");
    console.log("use gary install <project name>");
}
else{
    exec("pwd",(error,stdout,stding)=>{
        if(error){
            console.log("error::",error);
            return;
        }
        console.log("stdout::",stdout)
        worker.createproject(stdout,process.argv[3]);
    })
}