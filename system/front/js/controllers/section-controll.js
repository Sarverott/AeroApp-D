const ipc = require('electron').ipcRenderer;
const $ = require('jquery');
module.exports = class sectionControll{
  constructor(moduleName, selector){
    console.log("%c### BEGIN INITIALIZATION %c"+this.constructor.name+"%c ###", 'font-weight: bold;', 'font-weight: bold;color: red', 'font-weight: bold;color: black');
    this.rootSelector=selector;
    console.log("%c "+this.constructor.name+">%c selector: "+selector,  'font-weight: bold; color:darkgreen', 'color:black');
    this.modulename=moduleName;
    console.log("%c "+this.constructor.name+">%c module-name: "+moduleName,  'font-weight: bold; color:darkgreen', 'color:black');
    this.refresh();
    console.log("%c### END INITIALIZATION %c"+this.constructor.name+"%c ###", 'font-weight: bold;', 'font-weight: bold;color: red', 'font-weight: bold;color: black');
  }
  refresh(){
    this.beforeInit();
    $(this.rootSelector).html("");
    this.content=ipc.sendSync("load-file", "../../front/html/"+this.modulename);
    console.log("%c "+this.constructor.name+">%c content: "+this.content,  'font-weight: bold; color:darkgreen', 'color:black');
    this.container=$(this.rootSelector);
    this.container.html(this.content);
    this.afterInit();
  }
  beforeInit(){
    return null;
  }
  afterInit(){
    return null;
  }
}
