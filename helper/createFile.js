const fs=require('fs')

createFile=(name,content)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(name,content,(err)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(name);
            }
        })
    })
}
module.exports=createFile;