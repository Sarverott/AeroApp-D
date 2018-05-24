const ipc = require('electron').ipcRenderer;
const $ = require('jquery');

const sectionControll=require('./section-controll.js');

const headerControll=require("./header-controll.js");
const cardControll=require("./card-controll.js");
const modalControll=require("./modal-controll.js");

module.exports = class mainControll extends sectionControll{
  afterInit(){
    window.controllers.push(new modalControll("elements/modal-container.html", "#modals-root"));
    window.controllers.push(new headerControll("elements/head.html", "#header-root"));
    window.controllers.push(new cardControll("elements/cards.html", "#cards-root"));
  }
  beforeInit(){

  }
}
