const ipc = require('electron').ipcRenderer;
const $ = require('jquery');

const sectionControll=require('./section-controll.js');

const mainControll=require('./main-controll.js');

module.exports = class loadingControll extends sectionControll{
  afterInit(){
    this.readyToLoad=1;
  }
  beforeInit(){
    var tmp=function(){
      window.controllers.mainControll = new mainControll("elements/main.html","body");
    };
    setTimeout(function(){
      tmp();
    },1000);
  }

}
