const ipc = require('electron').ipcRenderer;
const $ = require('jquery');

const sectionControll=require('./sectionControll.js');

const mainControll=require('./mainControll.js');

module.exports = class loadingControll extends sectionControll{
  afterInit(){
    this.readyToLoad=1;
  }
  beforeInit(){
    var tmp=function(){
      window.controllers.push(new mainControll("elements/main.html","body"));
    };
    setTimeout(function(){
      tmp();
    },1000);
  }

}
