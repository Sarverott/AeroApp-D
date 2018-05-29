const ipc = require("electron").ipcRenderer;

module.exports={
  jsonRead:function(path){
    console.log("%cJSONLOAD "+path, "color:green");
    return ipc.sendSync("load-json", path);
  },
  jsonWrite:function(path, data){
    ipc.send("write-json", path, data);
  },
  isJson:function(data){
    if(typeof(data)=="string"){
      try{
        if(JSON.parse(data)){
          return true;
        }else{
          return false;
        }
      }catch(err){
        return false;
      }
    }else{
      return false;
    }
  }
}
