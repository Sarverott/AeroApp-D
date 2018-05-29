const ipc = require("electron").ipcRenderer;

module.exports={
  fileRead:function(path){
    console.log("%cFILELOAD "+path, "color:green");
    return ipc.sendSync("load-file", path);
  },
  fileWrite:function(path, data){
    ipc.send("write-file", path, data);
  },
  isFileExist:function(data){

  },
  listDirFiles:function(path){
    return ipc.sendSync("list-files", path)
  }
}
