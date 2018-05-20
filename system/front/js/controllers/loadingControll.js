const ipc = require('electron').ipcRenderer;
const $ = require('jquery');

const sectionControll=require('sectionControll.js');

module.exports = class loadingControll extends sectionControll{
  afterInit(){
    this.readyToLoad=1;
    
  }
  beforeInit(){

  }
  loadController(){
    const mainControll=require('mainControll.js');
    this.children=new mainControll();
  }
}
