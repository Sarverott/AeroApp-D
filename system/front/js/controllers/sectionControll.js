const ipc = require('electron').ipcRenderer;
const $ = require('jquery');
module.exports = class sectionControll{
  constructor(moduleName, selector){
    this.beforeInit();
    this.modulename=moduleName;
    this.content=ipc.sendSync("read-file", moduleName);
    this.container=$(selector);
    this.container.html(this.content);
    this.afterInit();
  }
  refresh(){
    this.beforeInit();
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
