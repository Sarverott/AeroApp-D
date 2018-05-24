const ipc = require('electron').ipcRenderer;
const buttonBuild = require('./buttonBuild.js');

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
  printModals(fillObjectArray){
    var tmp="";
    for(var i in fillObjectArray){
      var buttonsText="";
      fillObjectArray[i].body=ipc.sendSync("load-file", fillObjectArray[i].body);
      fillObjectArray[i].buttons=this.buttonBuild.printButtons(fillObjectArray[i].buttons);
      tmp+=ipc.sendSync("use-sheme", this.modulePath, fillObjectArray[i]);
    }
    return tmp;
  }
}
