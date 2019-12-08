const fs=require('fs');

readFile=(file)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(file,{encoding:'utf-8'},function(error,data){
            if(error)
            reject(error);
            resolve(data);
        }) 
    });
}
module.exports=readFile;