const ipc = require('electron').ipcRenderer;
const $ = require('jquery');

const sectionControll=require('./sectionControll.js');

const headerControll=require("./headerControll.js");
const cardControll=require("./cardControll.js");
const modalControll=require("./modalControll.js");

module.exports = class mainControll extends sectionControll{
  afterInit(){
    window.controllers.push(new modalControll("elements/modalcontainer.html", "#modals-root"));
    window.controllers.push(new headerControll("elements/head.html", "#header-root"));
    window.controllers.push(new cardControll("elements/cards.html", "#cards-root"));
  }
  beforeInit(){

  }
}
