const fs=require('fs')

appendFile=(name,content)=>{
    return new Promise((resolve,reject)=>{
        fs.appendFile(name,content,(err)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(name);
            }
        })
    })
}
module.exports=appendFile;