const fs=require('fs')

createFile=(name,content)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(name,content,(err)=>{
            if(err){
                reject({error:err,file:name});
            }
            else{
                resolve(name);
            }
        })
    })
}
module.exports=createFile;