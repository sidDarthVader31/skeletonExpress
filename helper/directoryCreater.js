const fs=require('fs');
/**
 * 
 * @param {*} path: path where directory is to be created relative to this file eg:'../database/
 */
const createDirectory=(dir)=>{
    console.log("directory::",dir);
    return new Promise((resolve,reject)=>{
        if(!fs.existsSync(dir)){
            // return fs.promises.mkdir(dir,{recursive:true});
        fs.mkdir(dir,{recursive: true},function(err){
            if(err){
                console.log("error:::",err);
                reject({error:err,file:dir});
            }
            else{
       //         console.log("successfully created");
                resolve(dir)
            }
        })
   }
   else{
       resolve(dir);
   }
    })
    
}
module.exports=createDirectory