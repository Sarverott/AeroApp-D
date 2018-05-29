const $ = require("jquery");

const sectionControll = require("./section-controll.js");
const modalBuild = require("../builders/modal-build.js");

const jsonProcedor = require("../procedors/json-procedor.js");

module.exports = class modalControll extends sectionControll{
  beforeInit(){
    this.modalBuild = new modalBuild("../../front/html/tempalets/modal.html");
  }
  afterInit(){
    console.log(this.container);
    this.modalBuild.printModals(this.container, jsonProcedor.jsonRead("../../registers/modals.json"));
  }
}
