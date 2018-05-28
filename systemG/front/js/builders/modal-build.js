const ipc = require('electron').ipcRenderer;
const buttonBuild = require('./button-build.js');

module.exports = class modalBuild{
  constructor(modulePath){
    this.buttonBuild=new buttonBuild(function(fillObject){
      var tmp='';
      tmp+='<button type="button" class="btn ';
      tmp+=fillObject.classes.join(" ");
      tmp+='" data-dismiss="modal" data-filltext="';
      tmp+=fillObject.langtag;
      tmp+='">';
      tmp+=fillObject.text;
      tmp+='</button>';
      return tmp;
    });
    this.modulePath=modulePath;
  }
  printModals(container, fillObjectArray){
    container.html("");
    for(var i in fillObjectArray){
      fillObjectArray[i].body=ipc.sendSync("load-file", fillObjectArray[i].body);
      fillObjectArray[i].buttons=this.buttonBuild.printButtons(fillObjectArray[i].buttons);
      var toTmp=ipc.sendSync("use-sheme", this.modulePath, fillObjectArray[i]);
      //console.log(toTmp);
      container.append(toTmp);
      var tmp=require(fillObjectArray[i].extender);
      tmp(fillObjectArray[i]);
    }
  }
}
