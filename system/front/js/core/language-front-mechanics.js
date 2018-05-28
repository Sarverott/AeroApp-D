const ipc = require('electron').ipcRenderer;
const remote = require('electron').remote;
const $=require('jquery');

var errorHandle;

var language="pl";
var isSetLanguage=false;
var langTextMatrix;

function changeTextInMarked(markplace){
  $(markplace+(markplace!=""?" ")+"*[data-filltext]").each(function(){
    var roadArray=($(this).data("filltext")).split(".");
    if(roadArray.length==0){
      $(this).html("#####");
    }
    var tmp=langTextMatrix;
    for(i in roadArray){
      tmp=tmp[roadArray[i]];
    }
    if(typeof(tmp)!="String"){
      $(this).html("#####");
    }else{
      $(this).html(tmp);
    }
  });
}
function listOfLanguages(){
  var filelist=ipc.sendSync("list-files", "resources/lang");
  for(i in filelist){
    filelist[i]=filelist[i].split(".");
    filelist[i]=filelist[i][0];
  }
  return filelist;
}
exports.setErrorHandling=function(errorHandler){
  errorHandle=errorHandler;
}
exports.setLanguage=function(langShortcut){
  if((listOfLanguages()).indexOf()<=0){
      language=langShortcut;
      langTextMatrix=ipc.sendSync("load-json", "resources/lang/"+langShortcut+".json");
      isSetLanguage=true;
  }else{
    errorHandler({
      lang:langShortcut,
      error:"FILE_NOT_EXIST"
    })
  }
}
exports.fillText=function(selector=""){
  changeTextInMarked(selector);
}
exports.listAvaibleLanguages=function(){
  return listOfLanguages();
}
