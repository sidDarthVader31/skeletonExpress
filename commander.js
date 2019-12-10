const commander=require('commander');
const worker=require('./worker')
commander.version("1.0")
.description("installer")

commander.command("install")
.alias("i")
.description("add a new command")
.action(()=>{
    worker.createproject();
})

commander.parse(process.argv);