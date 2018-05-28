const ipc = require('electron').ipcRenderer;
const $ = require('jquery');

module.exports = class sectionControll{
  constructor(moduleName, selector, aditionalPreparator=false){
    console.group("BEGIN INITIALIZATION "+this.constructor.name);
    this.rootSelector=selector;
    this.aditionalRequirement=aditionalPreparator;
    console.log(this.constructor.name+"> selector: "+selector);
    this.modulename=moduleName;
    console.log(this.constructor.name+"> module-name: "+moduleName);
    this.refresh();
    console.groupEnd();
  }
  refresh(){
    this.beforeInit();
    $(this.rootSelector).html("");
    this.content=ipc.sendSync("load-file", "../../front/html/"+this.modulename);
    this.container=$(this.rootSelector);
    this.container.html(this.content);
    this.afterInit();
    if(this.aditionalRequirement){this.aditionalRequirement();}
    this.addEventListeners();
  }
  beforeInit(){
    return null;
  }
  afterInit(){
    return null;
  }
  addEventListeners(){

  }
}
