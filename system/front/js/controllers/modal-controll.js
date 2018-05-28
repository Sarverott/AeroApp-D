const $ = require("jquery");
const ipc = require("electron").ipcRender;

const sectionControll = require("./section-controll.js");
const modalBuild = require("../builders/modal-build.js");

module.exports = class modalControll extends sectionControll{
  beforeInit(){
    this.modalBuild = new modalBuild("../../front/html/tempalets/modal.html");
  }
  afterInit(){
    console.log(this.container);
    this.modalBuild.printModals(this.container, [
      {
        id:"error-modal",
        titletext:"wystąpił błąd",
        titlelangtag:"errors.erroroccurred",
        titlesize:4,
        body:"../../front/html/elements/modals/error.html",
        extender:"../extenders/modals-extenders/error-modal-extender.js",
        buttons:[
          {
            text:"zamknij",
            langtag:"common.close",
            classes:[
              "btn-danger"
            ]
          },
          {
            text:"wyślij zgłoszenie",
            langtag:"errors.sendissue",
            classes:[
              "btn-basic"
            ]
          }
        ]
      },
      {
        id:"info-modal",
        titletext:"informacje",
        titlelangtag:"info.informations",
        titlesize:1,
        body:"../../front/html/elements/modals/info.html",
        extender:"../extenders/modals-extenders/info-modal-extender.js",
        buttons:[
          {
            text:"ok",
            langtag:"common.ok",
            classes:[
              "btn-basic"
            ]
          }
        ]
      }
    ]);
  }
}
