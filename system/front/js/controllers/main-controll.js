const ipc = require('electron').ipcRenderer;
const $ = require('jquery');

const sectionControll=require('./section-controll.js');

const headerControll=require("./header-controll.js");
const cardControll=require("./card-controll.js");
const modalControll=require("./modal-controll.js");

module.exports = class mainControll extends sectionControll{
  afterInit(){
    var additionRequirement=require("./cards-controllers/main-card-controll.js");
    window.controllers.modalControll=new modalControll("elements/modal-container.html", "#modals-root");
    window.controllers.headerControll=new headerControll("elements/head.html", "#header-root");
    window.controllers.cardControll=new cardControll("elements/cards/main.html", "#cards-root", additionRequirement);
  }
  beforeInit(){

  }
}
